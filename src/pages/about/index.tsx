import Image from "next/image";
import React, { FC } from "react";

import "../../app/globals.css";
import Header from "@/components/post/header";

const About: FC = () => {
  return (
    <section className="mx-auto px-5 mt-16 lg:px-48">
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
        <a className="text-sm leading-8 text-gray-400" href="https://github.com/qiqzhao">https://github.com/qiqzhao</a>
      </div>

      <div className="flex flex-col gap-4 text-gray-400 leading-10">
        <div>
          <h4 className="text-black font-bold">熟悉的技术</h4>

          <li className="text-sm leading-8">
            目前正在做的 React UI 库，
            <a
              className="text-blue-500 hover:text-blue-700 "
              href="https://github.com/choco-ui/choco-ui"
            >
              choco-ui
            </a>
          </li>

          <li className="text-sm leading-8">
            学习 CSS3 动画汇总，
            <a
              className="text-blue-500 hover:text-blue-700 "
              href="https://qiqzhao.github.io/css-demo/"
            >
              CSS-demo
            </a>
          </li>

          <li className="text-sm leading-8">
            模仿某个官网做的响应式，
            <a
              className="text-blue-500 hover:text-blue-700 "
              href="https://github.com/qiqzhao/task"
            >
              响应式官网
            </a>
          </li>

          <li className="text-sm leading-8">
            人生第一个 NPM 包，
            <a
              className="text-blue-500 hover:text-blue-700 "
              href="https://www.npmjs.com/package/@qiqzhao/react-cli"
            >
              react-cli
            </a>
          </li>
        </div>

        <div>
          <h4 className="text-black font-bold">熟悉的技术</h4>

          <li className="text-sm leading-8">Javascript</li>
          <li className="text-sm leading-8">React</li>
          <li className="text-sm leading-8">Node.js</li>
          <li className="text-sm leading-8">Webpack</li>
          <li className="text-sm leading-8">MySQL</li>
          <li className="text-sm leading-8">MongoDB</li>
        </div>

        <div>
          <h4 className="text-black font-bold">学过的技术</h4>

          <li className="text-sm leading-8">Java</li>
          <li className="text-sm leading-8">Docker</li>
          <li className="text-sm leading-8">CI CD</li>
        </div>

        <div>
          <h4 className="text-black font-bold">联系方式</h4>

          <li className="text-sm leading-8">邮箱：bme_ritter@foxmail.com</li>
        </div>
      </div>
    </section>
  );
};

export default About;
