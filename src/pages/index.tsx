import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Translate from "@docusaurus/Translate";
import useGlobalData from "@docusaurus/useGlobalData";
import {
  FC,
  PropsWithChildren,
  ReactNode,
  createElement,
  useState,
} from "react";
import { ArrowRight } from "../components/icons/ArrowRight";

function Header() {
  const { siteConfig } = useDocusaurusContext();
  const {} = useGlobalData();
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>
        Production-Ready{" "}
        <span className={styles.light}>
          AI Agent &
          <br />
          Application Kit
          <br /> for
        </span>{" "}
        Every Developer
      </h1>
      <img src="/img/banner.png" className={styles.banner} />
    </header>
  );
}

interface ContentContainerProps {
  id?: string;
  level: 2 | 3;
  title?: ReactNode;
  hint?: ReactNode;
  description?: ReactNode;
  padding?: boolean;
}

const ContentContainer: FC<PropsWithChildren<ContentContainerProps>> = ({
  id,
  level,
  title,
  description,
  hint,
  children,
  padding = true,
}) => {
  return (
    <section
      className={clsx(styles.contentContainer, {
        [styles.noPadding]: !padding,
      })}
    >
      {hint && (
        <div className={styles.contentContainerHint}>
          <div className={styles.contentContainerHintLine} />
          {hint}
        </div>
      )}
      <div
        className={clsx(styles.contentContainerDivider, styles[`d${level}`])}
      />
      {title && createElement(`h${level}`, { id, className: styles.h2 }, title)}
      {description && (
        <p className={clsx(styles.p, styles[`p${level}`])}>{description}</p>
      )}
      {children}
    </section>
  );
};

const RowContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.rowContainerDivider} />
      {children}
    </div>
  );
};

function Introduction() {
  return (
    <ContentContainer
      level={2}
      title={<Translate>Flappy</Translate>}
      hint={<Translate>banner</Translate>}
    >
      <div className={styles.introductionSubtitle}>
        AI Agent DeveloperAI Agent DeveloperAI
      </div>
      <div className={styles.introductionContent}>
        <p className={styles.p}>
          <Translate>
            We're Pleisto, a technology company with a vision to "augment human
            intellect" 🧠 and foster a better world.
          </Translate>
        </p>
        <p className={styles.p}>
          <Translate>
            We're thrilled to introduce two game-changing projects: Flappy
            Engine and Flappy. These innovative, open-source tools are designed
            to supercharge the industrial application of AI by harnessing the
            power of Large Language Models, such as GPT
          </Translate>
        </p>
      </div>
      <a className={styles.button}>
        <ArrowRight className={styles.buttonIcon} />
        <Translate>Get Start</Translate>
      </a>
    </ContentContainer>
  );
}

function AboutUs() {
  return (
    <ContentContainer
      id="about-us"
      level={2}
      title={<Translate>About Us</Translate>}
      description={
        <Translate>
          We're the 'developer behind developers', augmenting human intellect
          with the elegance of next-gen technology.
        </Translate>
      }
    >
      <div className={styles.aboutUsMain}>
        <img src="/img/about-us.png" className={styles.aboutUsImg} />
        <div className={styles.aboutUsContent}>
          <p className={styles.p}>
            We're Pleisto, a technology company with a vision to "augment human
            intellect" 🧠 and foster a better world.
          </p>
          <p> </p>
          <p className={styles.p}>
            We're thrilled to introduce two game-changing projects: Flappy
            Engine and Flappy. These innovative, open-source tools are designed
            to supercharge the industrial application of AI by harnessing the
            power of Large Language Models, such as GPT.
          </p>
          <p> </p>
          <p className={styles.p}>
            Flappy, our Production-Ready LLM Agent SDK for Every Developer, is
            designed to bridge the gap between large language models and
            developers. It allows you to harness the power of AI, no matter your
            technical expertise or project complexity.
          </p>
          <p> </p>
          <p className={styles.p}>
            Building on the foundation of Flappy, our Flappy Engine takes things
            a step further. It's a comprehensive AI Backend-as-a-Service (BaaS)
            that not only connects applications with underlying AI models, but
            also intelligently automates tasks based on model outputs. By
            integrating with various data sources, it can increase the speed and
            efficiency of your AI workflows. Furthermore, Flappy Engine employs
            smart caching and other acceleration techniques to ensure maximum
            performance.
          </p>
          <p> </p>
          <p className={styles.p}>
            In the past, we embarked on an ambitious project called MashPod,
            formerly known as Brickdoc, an all-in-one workspace for remote
            teams. As we've evolved, our focus has shifted to the Yuren Engine.
            We're leveraging the insights gained from previous projects, along
            with our extensive experience in Semantic Web and knowledge graphs,
            to drive these new initiatives.
          </p>
          <a className={clsx(styles.button, styles.aboutUsBtn)}>
            <ArrowRight className={styles.buttonIcon} />
            <Translate>Get Start</Translate>
          </a>
        </div>
      </div>
    </ContentContainer>
  );
}

function AISolutions() {
  const [activeAnchor, setActiveAnchor] = useState("");
  const items = [
    {
      anchor: "ai-solutions-flappy",
      title: <Translate>Flappy</Translate>,
      contentTitle: <Translate>Flappy</Translate>,
      contentDescription: (
        <Translate>
          Flappy is a production-ready Language Language Model (LLM)
          Application/Agent SDK designed to simplify AI integration in your
          projects. It is an easy-to-use, universally compatible, and
          production-ready solution that brings the power of AI to developers
          regardless of their preferred programming language.
        </Translate>
      ),
      content: (
        <>
          <RowContainer>
            <span>
              <Translate>AI Model Module</Translate>
            </span>
            <span>
              <Translate>Data-processing Modules</Translate>
            </span>
            <span>
              <Translate>Other Modules</Translate>
            </span>
          </RowContainer>
          <RowContainer>
            <span>
              <Translate>Input And Output Method Support</Translate>
            </span>
          </RowContainer>
          <RowContainer>
            <span>
              <Translate>Basic Support Functions</Translate>
            </span>
          </RowContainer>
        </>
      ),
    },
    {
      anchor: "ai-solutions-yuren-7b",
      title: <Translate>Yuren-7b</Translate>,
      contentTitle: <Translate>Yuren-BaiChuan-7b</Translate>,
      contentDescription: (
        <Translate>
          YuRen is a multi-modal large language model based on
          baichuan-inc/baichuan-7B and trained with multi-task supervised
          fine-tuning. It is built on top of Pleisto's data-centric AI work.
          YuRen has excellent performance on multi-turn dialogue, open-domain
          question answering, role-playing, text generation, text understanding,
          image understanding and other tasks.
        </Translate>
      ),
    },
    {
      anchor: "ai-solutions-yuren-13b",
      title: <Translate>Yuren-13b</Translate>,
      contentTitle: <Translate>Yuren-SQL-13b</Translate>,
      contentDescription: (
        <Translate>
          Yuren 13B is an information synthesis large language model that has
          been continuously trained based on Llama 2 13B, which builds upon the
          data-centric work of Pleisto. This model has achieved state-of-the-art
          performance in various information synthesis scenarios, including
          information extraction in multiple languages with a focus on Chinese
          and English, natural language to SQL generation, and structured data
          output, all with the same parameter size.
        </Translate>
      ),
    },
    {
      anchor: "ai-solutions-mash-diffusion",
      title: <Translate>Mash Diffusion</Translate>,
      contentTitle: <Translate>Mash Diffusion</Translate>,
      contentDescription: (
        <Translate>
          Thousands of hours of training were invested in the Stable Diffusion
          2.1 open source model. In our model training, the annotators trained
          on more than 2 million images all graduated from professional art
          schools and have many years of experience in design work. Processing
          of professional images such as viewpoint, perspective, and white
          space. The ability to understand the input keywords and the designer's
          control is significantly improved.
        </Translate>
      ),
      content: <img src="/img/mash-diffusion-prompt.png" />,
    },
    {
      anchor: "ai-solutions-model-customization",
      title: <Translate>Model Customization</Translate>,
      contentTitle: <Translate>Model Customization</Translate>,
      contentDescription: (
        <Translate>
          mage accuracy is greatly improved, and the dedicated model can
          accurately generate images related to the target product, which is
          recommended for customers with non-generic needs.Still life (e.g., a
          sofa, coffee machine) is forced to look exactly like the training data
          by training an overfitting model to generate a particular portrait in
          this model. It is best to train a model with more than 30 portraits
          for good results.
        </Translate>
      ),
    },
  ];
  return (
    <ContentContainer
      id="ai-solutions"
      level={2}
      title={<Translate>AI Solutions</Translate>}
    >
      <div className={styles.aiSolutionsMain}>
        <menu className={styles.toc}>
          {items.map((item) => (
            <li
              key={item.anchor}
              className={clsx(styles.tocItem, {
                [styles.tocItemActive]: item.anchor === activeAnchor,
              })}
              onClick={() => setActiveAnchor(item.anchor)}
            >
              <a href={`#${item.anchor}`}>{item.title}</a>
              {item.anchor === activeAnchor && <ArrowRight />}
            </li>
          ))}
        </menu>
        <div className={styles.aiSolutionsContent}>
          {items.map((item) => (
            <ContentContainer
              id={item.anchor}
              level={3}
              title={item.contentTitle}
              description={item.contentDescription}
              padding={false}
            >
              <div className={styles.aiSolutionsContentContainer}>
                {item.content}
              </div>
            </ContentContainer>
          ))}
        </div>
      </div>
    </ContentContainer>
  );
}

function Blogs() {
  return (
    <ContentContainer
      id="blogs"
      level={2}
      title={<Translate>Blogs</Translate>}
    ></ContentContainer>
  );
}

function CoreMembers() {
  return (
    <ContentContainer
      id="core-members"
      level={2}
      title={<Translate>Core Members</Translate>}
    ></ContentContainer>
  );
}

function Partners() {
  return (
    <ContentContainer
      id="partners"
      level={2}
      title={<Translate>Partners</Translate>}
    >
      <div className={styles.partnersLayout}>
        <img src="/img/partners/1.png" className={styles.partnerImg} />
        <img src="/img/partners/2.png" className={styles.partnerImg} />
        <img src="/img/partners/3.png" className={styles.partnerImg} />
        <img src="/img/partners/4.png" className={styles.partnerImg} />
        <img src="/img/partners/5.png" className={styles.partnerImg} />
        <img src="/img/partners/6.png" className={styles.partnerImg} />
      </div>
    </ContentContainer>
  );
}

function ContactUs() {
  return (
    <ContentContainer
      id="contact-us"
      level={2}
      title={<Translate>Contact Us</Translate>}
    >
      <div className={styles.contactUsText}>
        Stay tuned for updates 📢 as we continue to innovate and move forward
        🚀.
      </div>
      <a className={clsx(styles.button, styles.primary)}>
        <ArrowRight className={styles.buttonIcon} />
        <Translate>Get Start</Translate>
      </a>
    </ContentContainer>
  );
}

function Footer() {
  return (
    <footer>
      <ContentContainer level={2}>
        <div className={styles.footerLayout}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </ContentContainer>
    </footer>
  );
}

export default function LandingPage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Layout
        title={siteConfig.title}
        description=""
        wrapperClassName={styles.page}
      >
        <Header />
        <main>
          <Introduction />
          <AboutUs />
          <AISolutions />
          <Blogs />
          <CoreMembers />
          <Partners />
          <ContactUs />
        </main>
        <Footer />
      </Layout>
    </>
  );
}
