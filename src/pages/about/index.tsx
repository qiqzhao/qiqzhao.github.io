import Image from "next/image";
import React, { FC } from "react";

import "../../app/globals.css";
import Header from "@/components/post/header";
import Li from "@/components/about/li";
import SectionTitle from "@/components/about/section-title";

const About: FC = () => {
  return (
    <section className="mx-auto px-5 mt-16 lg:px-48 mb-8">
      <Header />

      <div className="flex flex-col items-center">
        <Image
          src="/avatar/avatar.jpg"
          width="100"
          height="100"
          className="rounded-full"
          alt="avatar"
        />
        <h1 className="mt-6 text-lg font-bold">{`qiqzhao's Blog`}</h1>
        <a
          className="text-sm leading-8 text-gray-400 hover:text-blue-500 "
          href="https://github.com/qiqzhao"
          target="__blank"
        >
          https://github.com/qiqzhao
        </a>
      </div>

      <div>
        <SectionTitle>Nice to meet you</SectionTitle>
        <p className="text-sm leading-8 text-gray-400">
          爱画画的码农，偶尔在小红书发的那些 &nbsp;
          <a
            className="text-blue-500 hover:text-blue-700 "
            href="https://www.xiaohongshu.com/user/profile/5af462ef4eacab71f9c249aa?xhsshare=CopyLink&appuid=5af462ef4eacab71f9c249aa&apptime=1724724646&share_id=b6485cb0ac0543eb991d576853a4b85d"
          >
            画
          </a>
        </p>
      </div>

      <div className="flex flex-col gap-4 text-gray-400 leading-10">
        <div>
          <SectionTitle>折腾过的</SectionTitle>

          <Li>
            仿网易云的，
            <a
              className="text-blue-500 hover:text-blue-700 "
              href="https://qiqzhao.github.io/js-demo/song-scroll/"
              target="__blank"
            >
              歌词滚动效果
            </a>
          </Li>

          <Li>
            目前正在做的 React UI 库，
            <a
              className="text-blue-500 hover:text-blue-700 "
              href="https://github.com/choco-ui/choco-ui"
              target="__blank"
            >
              choco-ui
            </a>
          </Li>

          <Li>
            想做一个教背古诗的小程序，但苦于买不起服务器，暂时搁置，没有link，小程序搜索，
            <a className="text-blue-500 hover:text-blue-700 " href="#">
              个人学背古诗
            </a>
          </Li>

          <Li>
            学习 CSS3 动画汇总，
            <a
              className="text-blue-500 hover:text-blue-700 "
              href="https://qiqzhao.github.io/css-demo/"
              target="__blank"
            >
              CSS-demo
            </a>
          </Li>

          <Li>
            模仿某个官网做的响应式，
            <a
              className="text-blue-500 hover:text-blue-700 "
              href="https://github.com/qiqzhao/task"
              target="__blank"
            >
              响应式官网
            </a>
          </Li>

          <Li>
            人生第一个 NPM 包，好几年前的，只能考古了，
            <a
              className="text-blue-500 hover:text-blue-700 "
              href="https://www.npmjs.com/package/@qiqzhao/react-cli"
              target="__blank"
            >
              react-cli
            </a>
          </Li>
        </div>

        <div>
          <SectionTitle>熟悉的技术</SectionTitle>

          <Li>Javascript </Li>
          <Li>React </Li>
          <Li>Node.js </Li>
          <Li>Webpack </Li>
          <Li>MySQL </Li>
          <Li>MongoDB </Li>
          <Li>Next.js </Li>
          <Li>Tailwind </Li>
        </div>

        <div>
          <SectionTitle>学过的技术</SectionTitle>

          <Li>Java </Li>
          <Li>Docker </Li>
          <Li>CI CD </Li>
        </div>

        <div>
          <SectionTitle>联系方式</SectionTitle>

          <Li>邮箱：bme_ritter@foxmail.com </Li>
        </div>
      </div>
    </section>
  );
};

export default About;
