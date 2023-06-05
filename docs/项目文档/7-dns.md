---
sidebar_position: 7
title: DNS与转发
---


为了实现通过域名直接访问minik8s上service的功能，我们需要实现DNS与转发功能。这一部分由DNSController与Kubeproxy协作完成。

当Kubeproxy启动时，会向API-Server发送一个创建nginx pod的请求，当DNSController启动时，会向API-Server发送一个创建nginx service的请求。当用户创建dns对象后，API-Server会通知DNSController，DNSController会根据创建的dns的信息为nginx生成一份配置文件，示例如下：

```
server {
        listen 80;
        server_name test.com;
        location /service1 {
                proxy_pass http://192.168.160.168:88/;
        }
        location /service2 {
                proxy_pass http://192.168.121.186:88/;
        }
}
```

此外，DNSController还会维护一个域名到ip的map，域名由dns指定，ip则是nginx的clusterIP。接着，DNSController会将以上信息发送给所有的Kubeproxy，Kubeproxy收到消息后，会进行hosts文件的更新，以便实现DNS功能，同时向nginx pod的挂载目录写入新的配置文件，并让nginx pod执行`nginx -s reload`命令，由此使得配置文件的更新生效。

这样，所有对以上域名的访问都会被变成对nginx service的访问，通过nginx service相关的iptables设置，流量会被转发到nginx pod上，之后nginx pod将会根据配置文件和子路径的匹配，将流量转发到对应的service的clusterIP上，从而实现了DNS与转发功能。

另外，为了实现pod内部也能正常地使用DNS服务，我们必须要使pod的hosts文件与节点上的保持一致，为了实现这一点有以下做法：

- 定期同步node与其上所有pod的hosts文件
- 在pod创建时或者dns更新时同步hosts文件
- 使所有的pod均挂载/etc/hosts目录

以上实现均可行，我们选择了第一种做法。

以下为示例yaml文件：

```yaml
apiVersion: v1
kind: Dns
metadata:
  name: test-dns
spec:
  host: test.com
  paths:
  - subPath: /api/v2           # 子路径
    svcName: service-example
    svcPort: 88

```

使用方法：在nginx pod与nginx service创建好之后，使用以下命令：

`kubectl apply dns.yaml`