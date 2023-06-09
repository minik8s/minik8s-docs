import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Timeline } from 'antd';


export default function TimeLine(): JSX.Element {
    return(
        <div className="container">
            <h3>开发时间线</h3>

            {/* 左对齐 */}
            <div>
            <Timeline
                mode="left"
                // mode="alternate"
                // mode="right"
                items={[
                {
                    label: '2023-04-10',
                    children: "创建仓库，项目启动",
                },
                {
                    label: '2023-04-15',
                    children: '创建第一个Feature分支，开始第一个功能，计划Containerd作为运行时',
                },
                {
                    label: '2023-04-16',
                    children: 'Etcd存储的读取和写入完成',
                },
                {
                    label: '2023-04-16',
                    children: 'Etcd存储的读取和写入完成',
                },
                {
                    label: '2023-04-22',
                    children: 'API Server的基本功能完成',
                },
                {
                    label: '2023-04-25',
                    children: '中期答辩，基本没实现任何功能和抽象，同天完成CICD的配置',
                },
                {
                    label: '2023-04-25',
                    children: '中期答辩，基本没实现任何功能',
                },
                {
                    label: '2023-04-29',
                    children: '核心机制WatchList机制完成、MessageQueue机制完成',
                },
                {
                    label: '2023-05-03',
                    children: 'Kubelet的架构初步设计好，确定使用Redis作为缓存',
                },
                {
                    label: '2023-05-03',
                    children: 'Kubelet的架构初步设计好，确定使用Redis作为缓存',
                },
                {
                    label: '2023-05-12',
                    children: '实现了Service抽象的EndPoint',
                },
                {
                    label: '2023-05-15',
                    children: 'Kubelet的代码完成，Pod抽象能够正常运转',
                },
                {
                    label: '2023-05-20',
                    children: 'GPU-抽象进行时，Service基本完成，修复IPTable问题',
                },
                {
                    label: '2023-05-21',
                    children: 'GPU-抽象完成，耗时仅仅两天(一个周末)，周六可是520哦~',
                },
                {
                    label: '2023-05-21',
                    children: 'RepliaSet抽象启动，开始完成了API-Server的部分，答辩时间确定为十六周',
                },
                {
                    label: '2023-05-22',
                    children: '[15周周一]Musicminion发烧了，当天写完了RepliaSet抽象，基本可用，DNS抽象启动',
                },
                {
                    label: '2023-05-23',
                    children: '[15周周二]DNS抽象由Every-Breaking-Wave基本实现',
                },
                {
                    label: '2023-05-24',
                    children: '[15周周三]计划实现HPA抽象，简单的写了一部分，DNS修复完成',
                },
                {
                    label: '2023-05-25',
                    children: '[15周周四]确认换题Serveless，Musicminion开始写FuncServeless抽象，Every-Breaking-Wave的HPA同步开始',
                },
                {
                    label: '2023-05-25',
                    children: '[15周周五]继续写FuncServeless抽象',
                },
                {
                    label: '2023-05-28',
                    children: '[15周周末]勉强完成Workflow和Func抽象，准备多机上云测试',
                },
                {
                    label: '2023-05-28',
                    children: '[15周小结]本周完成DNS/HPA/ReplicaSet/Serveless。平均两天一个功能',
                },
                {
                    label: '2023-05-30',
                    children: '[16周周二]开始录制视频',
                },
                {
                    label: '2023-05-31',
                    children: '[16周周三]视频更换了录制方式，录制了前面一部分的，同步开始剪辑、文档',
                },
                {
                    label: '2023-06-01',
                    children: '[16周周四]录制视频、PPT制作、视频剪辑',
                },
                {
                    label: '2023-06-02',
                    children: '[16周周五]答辩，全部功能完成',
                },
                {
                    label: '2023-06-05',
                    children: '[16周周末]文档完善！结束收工！',
                },
                ]}
            />
            </div>

            
        </div>
    );
}