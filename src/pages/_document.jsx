import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="title"
          content="Agung Prasetyo | Junior Front End Web Developer"
        />
        <meta
          name="description"
          content="As a junior front end web developer, I'm passionate about crafting engaging and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I'm eager to contribute to creating visually appealing and responsive websites. I'm dedicated to staying up-to-date with the latest web development trends and technologies, always striving to enhance my skills and deliver high-quality web solutions. Let's collaborate and turn your web ideas into reality together!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agungpraz31.my.id/" />
        <meta
          property="og:title"
          content="Agung Prasetyo | Junior Front End Web Developer"
        />
        <meta
          property="og:description"
          content="As a junior front end web developer, I'm passionate about crafting engaging and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I'm eager to contribute to creating visually appealing and responsive websites. I'm dedicated to staying up-to-date with the latest web development trends and technologies, always striving to enhance my skills and deliver high-quality web solutions. Let's collaborate and turn your web ideas into reality together!"
        />
        <meta
          property="og:image"
          content="https://agungpraz31.my.id/images/me2.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://agungpraz31.my.id/" />
        <meta
          property="twitter:title"
          content="Agung Prasetyo | Junior Front End Web Developer"
        />
        <meta
          property="twitter:description"
          content="As a junior front end web developer, I'm passionate about crafting engaging and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I'm eager to contribute to creating visually appealing and responsive websites. I'm dedicated to staying up-to-date with the latest web development trends and technologies, always striving to enhance my skills and deliver high-quality web solutions. Let's collaborate and turn your web ideas into reality together!"
        />
        <meta
          property="twitter:image"
          content="https://agungpraz31.my.id/images/me2.png"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://agungpraz31.my.id/images/me2.png"
        />
        <link rel="icon" href="/images/me3.svg" type="image/x-icon" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </body>
    </Html>
  );
}
