import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import MainAvatar from '../Avatar';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  imgURL: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'every-breaking-wave',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    // Svg: <MainAvatar></MainAvatar>,
    description: (
      <>
        <b>贡献部分：</b> minik8s网络相关、Service抽象、CNI网络插件、ReplicaSet抽象代码完善、HPA抽象、DNS抽象、Serveless自选功能修复和调试、jCloud部署测试、答辩视频录制、答辩视频解说、文档编写、多机集群部署的代码的调试修复、部署相关脚本编写
      </>
    ),
    imgURL: '/img/avatar-breaking-wave.jpg',
  },
  {
    title: 'Musicminion',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <b>贡献部分：</b> minik8s系统全局架构设计、Pod抽象、GPU-Job、ReplicaSet抽象、HPA抽象部分、Serveless自选功能、Kubelet代码编写、
        Kubectl架构和代码和和控制台美化、API与API对象设计、演示视频剪辑与字幕、文档网站搭建、文档编写、CI/CD设计管理
        {/* Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory. */}
      </>
    ),
    imgURL: '/img/logo-avatar.png',
  },
  {
    title: 'dongyunpeng-sjtu',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <b>贡献部分：</b> 答辩演示、GPU-Cuda程序的编写、GPU-Job部分，miniK8s的文档编写、答辩演示PPT的制作、Schedule调度策略设计和代码编写
      </>
    ),
    imgURL: '/img/avatar-dyp.jpg',
  },
];

function Feature({title, Svg, description, imgURL}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <MainAvatar src={imgURL}></MainAvatar>
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={"https://github.com/" + title}>{title}</a></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
