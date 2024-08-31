import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Translate from "@docusaurus/Translate";
import useGlobalData from "@docusaurus/useGlobalData";
import {
  FC,
  PropsWithChildren,
  ReactHTML,
  ReactNode,
  createElement,
  useState,
} from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "../components/icons/ArrowRight";
import { BlogPost } from "@site/plugins/blog-plugin";
import { Close } from "../components/icons/Close";
import Link from "@docusaurus/Link";

function Header() {
  const { siteConfig } = useDocusaurusContext();
  const STATIC_ROOT = siteConfig.baseUrl;
  const {} = useGlobalData();
  return (
    <header className={styles.header}>
      <motion.h1 className={clsx([styles.h1,styles.light])} {...whileInViewAnimation}>
        <span className={styles.bio}>
          The Developer behind developers:
        </span>{" "}<br/>
        augmenting human intellect with the elegance of next-gen technology.
      </motion.h1>
      <motion.img
        {...whileInViewAnimation}
        src={STATIC_ROOT + `img/banner.png`}
        className={styles.banner}
      />
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

const whileInViewAnimation = {
  initial: { opacity: 0, y: 20, x: 10 },
  whileInView: { opacity: 1, y: 0, x: 0 },
  viewport: { once: true },
  transition: { type: "tween", delayChildren: 0.3, delay: 0.3 },
};

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
      className={clsx(styles.contentContainer, styles[`l${level}`], {
        [styles.noPadding]: !padding,
      })}
    >
      {hint && (
        <div className={styles.contentContainerHint}>
          <div className={styles.contentContainerHintLine} />
          <motion.span {...whileInViewAnimation}>{hint}</motion.span>
        </div>
      )}
      <div
        className={clsx(styles.contentContainerDivider, styles[`d${level}`])}
      />
      {title &&
        createElement(
          motion[`h${level}`],
          {
            id,
            className: styles[`h${level}`],
            ...whileInViewAnimation,
          },
          title
        )}
      {description && (
        <motion.p
          {...whileInViewAnimation}
          className={clsx(styles.p, styles[`p${level}`])}
        >
          {description}
        </motion.p>
      )}
      {children}
    </section>
  );
};

const RowContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div {...whileInViewAnimation} className={styles.rowContainer}>
      <div className={styles.rowContainerDivider} />
      {children}
    </motion.div>
  );
};

function Introduction() {
  return (
    <ContentContainer
      level={2}
      title={<Translate>Flappy</Translate>}
      hint={<Translate>banner</Translate>}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={styles.introductionSubtitle}
      >
        AI Agent DeveloperAI Agent DeveloperAI
      </motion.div>
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
  const { siteConfig } = useDocusaurusContext();
  const STATIC_ROOT = siteConfig.baseUrl;

  /**
   * <motion.a
            {...whileInViewAnimation}
            className={clsx(styles.button, styles.aboutUsBtn)}
          >
            <ArrowRight className={styles.buttonIcon} />
            <Translate>Get Start</Translate>
          </motion.a>
   */
  return (
    <ContentContainer
      id="about-us"
      level={2}
      title={<Translate>About Us</Translate>}
      description={
        <Translate>
          At Pleisto, We believe in the power of technology to augment human intellect.
        </Translate>
      }
    >
      <div className={styles.aboutUsMain}>
        <motion.img
          src={STATIC_ROOT + "img/about-us.png"}
          className={styles.aboutUsImg}
          {...whileInViewAnimation}
        />
        <div className={styles.aboutUsContent}>
        
          <motion.p {...whileInViewAnimation} className={styles.p}>
            We're thrilled to introduce two game-changing projects: Flappy
            Engine and Flappy. These innovative, open-source tools are designed
            to supercharge the industrial application of AI by harnessing the
            power of Large Language Models, such as GPT.
          </motion.p>
          <p> </p>
          <motion.p {...whileInViewAnimation} className={styles.p}>
            Flappy, our Production-Ready LLM Agent SDK for Every Developer, is
            designed to bridge the gap between large language models and
            developers. It allows you to harness the power of AI, no matter your
            technical expertise or project complexity.
          </motion.p>
          <p> </p>
          <motion.p {...whileInViewAnimation} className={styles.p}>
            Building on the foundation of Flappy, our Flappy Engine takes things
            a step further. It's a comprehensive AI Backend-as-a-Service (BaaS)
            that not only connects applications with underlying AI models, but
            also intelligently automates tasks based on model outputs. By
            integrating with various data sources, it can increase the speed and
            efficiency of your AI workflows. Furthermore, Flappy Engine employs
            smart caching and other acceleration techniques to ensure maximum
            performance.
          </motion.p>
          <p> </p>
          <motion.p {...whileInViewAnimation} className={styles.p}>
            In the past, we embarked on an ambitious project called MashPod,
            formerly known as Brickdoc, an all-in-one workspace for remote
            teams. As we've evolved, our focus has shifted to the Flappy Engine.
            We're leveraging the insights gained from previous projects, along
            with our extensive experience in Semantic Web and knowledge graphs,
            to drive these new initiatives.
          </motion.p>
          
        </div>
      </div>
    </ContentContainer>
  );
}

function AISolutions() {
  const [activeAnchor, setActiveAnchor] = useState("");
  const { siteConfig } = useDocusaurusContext();
  const STATIC_ROOT = siteConfig.baseUrl;
  const items = [
    
    {
      anchor: "ai-solutions-synchronicityLLM",
      title: <Translate>SynchronicityLLM</Translate>,
      contentTitle: <Translate>SynchronicityLLM</Translate>,
      contentDescription: (
        <Translate>
          SynchronicityLLM is a cutting-edge language model that understands human emotions like never before. Trained on Pleisto's proprietary data, it achieves state-of-the-art performance in empathy, emotional resonance, and psychological techniques such as CBT and EFT.
          
          SynchronicityLLM strikes the perfect balance between reasoning capabilities, cost-effectiveness, and model power. It's not just smart—it's emotionally intelligent, making it ideal for applications in life coaching, roleplay and emotional support.
          
          Built on Pleisto's data-centric approach and powered by Google TPU, SynchronicityLLM delivers unparalleled performance without compromising on efficiency. Experience the future of AI-driven emotional intelligence.
        </Translate>
      ),
    },
    {
      anchor: "ai-solutions-flappy",
      title: <Translate>Flappy</Translate>,
      contentTitle: <Translate>Flappy</Translate>,
      contentDescription: (
        <Translate>
          Flappy is a production-ready AI Agent & Application Kit for Every Developer. It is an easy-to-use, universally compatible, and production-ready solution that brings the power of AI to developers regardless of their preferred programming language.

        </Translate>
      ),
      content: (
        <>
          <ul>
            <li>
              <b>Ease of Use: </b>Flappy is designed to be as user-friendly as CRUD application development, minimizing the learning curve for developers new to AI.
            </li>
            <li>
              <b>Production-Ready: </b>Beyond research, Flappy is a robust SDK that balances cost-efficiency and sandbox security to provide a stable platform for commercial environments.
            </li>
            <li>
              <b>Language-Agnostic: </b>Flappy integrates seamlessly with any programming language, eliminating the need for Python unless explicitly required by your application.
            </li>
          </ul>
           <a className={styles.button} href="https://flappy.pleisto.com" target="_blank">
        <ArrowRight className={styles.buttonIcon} />
        <Translate>Learn More</Translate>
        </a>
        </>
      ),
    },
    {
      anchor: "ai-solutions-mash-diffusion",
      title: <Translate>Mash Diffusion</Translate>,
      contentTitle: <Translate>Mash Diffusion</Translate>,
      contentDescription: (
        <Translate>
          Thousands of hours of training were invested in the Stable Diffusion
          2.1 model. In our model training, the annotators trained
          on more than 2 million images all graduated from professional art
          schools and have many years of experience in design work. Processing
          of professional images such as viewpoint, perspective, and white
          space. The ability to understand the input keywords and the designer's
          control is significantly improved.
        </Translate>
      ),
      content: (
        <motion.div
          {...whileInViewAnimation}
          className={styles.promptImgLayout}
        >
          <img
            className={styles.promptImg}
            src={STATIC_ROOT + "img/mash-diffusion-prompt.png"}
          />
          <div className={styles.promptForm}>
            <div className={styles.promptLabel}>
              <Translate>Prompt</Translate>
            </div>
            <div className={styles.promptInput}>
              <Translate>
                An angel knight in light armor slays a demon with a flaming
                sword , unreal engine, octane render, realistic, precise
                features, stunning background, cinematic, vray render, 8k,
                natural lighting, god light, depth of field, uplight, sharp
                focus, epic composition, 8k, UHD, natural light, Panorama shot,
                wide angle lens, photo realistic, maximum texture, HDR
              </Translate>
            </div>
            <div className={styles.promptSubmit}>
              <Translate>submit</Translate>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      anchor: "ai-solutions-model-customization",
      title: <Translate>Consulting & Model Training</Translate>,
      contentTitle: <Translate>Consulting & Model Training</Translate>,
      contentDescription: (
        <>
          <p>Embark on a transformative journey with Pleisto, where our new suite of services in <b>Technical Consulting</b> and <b>Generative AI Model Training</b> sets the stage for your leap into the future of development.
          </p>
          <p>Our experts offer customized guidance and strategic insights to propel your projects beyond industry norms, equipping you with the most innovative tech solutions. From personalized AI model development to ongoing support, we ensure your AI integration is seamless, whether you're a beginner or an expert. Experience the power of AI creativity with services tailored to your industry's unique demands, and keep your projects at the cutting edge with Pleisto's dedicated assistance.</p>
          </>
      ),
    },
  ];
  return (
    <ContentContainer
      id="ai-solutions"
      level={2}
      title={<Translate>Products & Services</Translate>}
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
              key={item.anchor}
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
  const { globalData } = useDocusaurusContext();

  const recentBlogs: BlogPost[] =
    (globalData?.["docusaurus-plugin-content-blog"]?.default as any)
      ?.recentPosts ?? [];

  return (
    <ContentContainer id="blogs" level={2} title={<Translate>Blogs</Translate>}>
      <div className={styles.blogPreviewLayout}>
        {recentBlogs.map((blog) => (
          <motion.div
            {...whileInViewAnimation}
            className={styles.blogPreview}
            key={blog.id}
          >
            <div className={styles.blogDate}>{blog.metadata.readingTime}</div>
            <a href={blog.metadata.permalink} className={styles.blogMain}>
              <div className={styles.blogTitle}>{blog.metadata.title}</div>
              <div className={styles.blogDescription}>
                {blog.metadata.description}
              </div>
            </a>
          </motion.div>
        ))}
      </div>
      <Link href="/blog" className={styles.blogLink}>
        <ArrowRight className={styles.blogLinkIcon} />
        <Translate>See all Blog Posts</Translate>
      </Link>
    </ContentContainer>
  );
}

interface Member {
  avatar: string;
  name: ReactNode;
  position: ReactNode;
  details: ReactNode;
}

const members = [
  {
    avatar: "img/members/borisding.png",
    name: <Translate>Boris Ding</Translate>,
    position: <Translate>Co-Founder & CEO</Translate>,
    details: (
      <Translate>
Boris brings a wealth of experience in data science, investment strategies, and technological innovation to our team. As the former head of Sequoia Capital China's data science team and co-founder and CTO of ZhuluX, a China Renaissance subsidiary, Boris has a proven track record in pioneering NLP and deep learning algorithms for quantitative investment applications. His expertise in developing competitive intelligence databases and data mining models has been recognized for impressive results. Boris has also contributed to the tech community as a speaker at Docker Meetup Beijing, promoting cloud-native technologies across China.
      </Translate>
    ),
  },
  {
    avatar: "img/members/wangyao.png",
    name: <Translate>Yao Wang</Translate>,
    position: <Translate>Co-Founder</Translate>,
    details: (
      <Translate>
        Yao is at the forefront of design and user experience, boasting a remarkable 80 million active users for the Philm Camera mini-program. His exceptional design contributions have been honored with prestigious awards, including the Xiaomi Golden Rice Award, Google Play's Best of, and Apple AppStore features. As one of the pioneering designers to implement AIGC technology, YaoWang's extensive hands-on experience is shaping national occupational standards for AIGC with the Ministry of Human Resources and Social Security. With prior roles at Raven Tech, Philm, B612, and as a co-founder of the PPT Autogeneration Project, his leadership in developing the Deepcolor intelligent color matching system has been pivotal in enhancing user engagement.
      </Translate>
    ),
  },
  
];

interface MemberDetailsPopoverProps {
  visible?: boolean;
}

const MemberDetailsPopover = ({ visible }: MemberDetailsPopoverProps) => {
  return visible ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween" }}
      className={clsx(styles.memberDetailsOverlay, {})}
    />
  ) : null;
};

function MemberCard({ member }: { member: Member }) {
  const { siteConfig } = useDocusaurusContext();
  const STATIC_ROOT = siteConfig.baseUrl;
  const [active, setActive] = useState(false);

  return (
    <motion.div {...whileInViewAnimation} className={styles.memberItem}>
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: active ? 1.2 : 1,
        }}
        exit={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={clsx(styles.member, { [styles.active]: active })}
        onPointerDownCapture={(event) => event.stopPropagation()}
        onClick={() => {
          setActive(true);
        }}
        onMouseEnter={() => {
          setActive(true);
        }}
        onMouseLeave={() => {
          setActive(false);
        }}
      >
        {active && (
          <Close
            className={styles.memberClose}
            // @ts-ignore
            onPointerDownCapture={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setActive(false);
            }}
          />
        )}
        <img
          className={styles.memberAvatar}
          src={STATIC_ROOT + member.avatar}
        />
        <div className={styles.memberDetails}>
          <div className={styles.memberName}>{member.name}</div>
          <div className={styles.memberPosition}>{member.position}</div>
          {active && (
            <motion.div
              initial={{ height: 0, overflow: "hidden" }}
              animate={{
                height: "auto",
              }}
              exit={{
                maxHeight: 0,
              }}
              transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
              className={styles.memberExtra}
            >
              {member.details}
            </motion.div>
          )}
        </div>
      </motion.div>
      <MemberDetailsPopover visible={active} />
    </motion.div>
  );
}

function CoreMembers() {
  return (
    <ContentContainer
      id="core-members"
      level={2}
      title={<Translate>Core Members</Translate>}
    >
      <div className={styles.members}>
        {members.map((member) => (
          <MemberCard key={member.avatar} member={member} />
        ))}
      </div>
    </ContentContainer>
  );
}

function Partners() {
  const { siteConfig } = useDocusaurusContext();
  const STATIC_ROOT = siteConfig.baseUrl;
  return (
    <ContentContainer
      id="partners"
      level={2}
      title={<Translate>Partners</Translate>}
    >
      <div className={styles.partnersLayout}>
        
        <motion.img
          {...whileInViewAnimation}
          alt="Google for Startups"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnMTAiCiAgIHdpZHRoPSI4MjQiCiAgIGhlaWdodD0iMTAwIgogICB2aWV3Qm94PSIwIDAgODI0IDEwMCIKICAgc29kaXBvZGk6ZG9jbmFtZT0iTG9nbyBmb3IgR29vZ2xlIGZvciBTdGFydHVwcyBwYWdlLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4wICg0MDM1YTRmLCAyMDIwLTA1LTAxKSI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMTYiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMxNCI+CiAgICA8cmVjdAogICAgICAgaWQ9InJlY3QzMDc3IgogICAgICAgaGVpZ2h0PSI4NS44MjYwNTYiCiAgICAgICB3aWR0aD0iNTI3LjQ5MjczIgogICAgICAgeT0iLTEzOS44Mjg5NyIKICAgICAgIHg9IjU2Ljg5NTkyNSIgLz4KICAgIDxyZWN0CiAgICAgICBpZD0icmVjdDMwNzEiCiAgICAgICBoZWlnaHQ9IjQ4LjQwMDU3NiIKICAgICAgIHdpZHRoPSI4Ny45NjYxMjUiCiAgICAgICB5PSItNzIuOTg0OTk1IgogICAgICAgeD0iMzA0LjIzMjE5IiAvPgogICAgPHJlY3QKICAgICAgIHg9Ijc0Ljc5MDU1NyIKICAgICAgIHk9Ii0zMDAuOTAxNTQiCiAgICAgICB3aWR0aD0iMzQwLjkwNTc5IgogICAgICAgaGVpZ2h0PSI2OS41NzI2MTEiCiAgICAgICBpZD0icmVjdDgzNyIgLz4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMjM1IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijc0NyIKICAgICBpZD0ibmFtZWR2aWV3MTIiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOnpvb209IjEuNTcxNjcyMSIKICAgICBpbmtzY2FwZTpjeD0iMzU4Ljc5MzI3IgogICAgIGlua3NjYXBlOmN5PSItMTEuNDUwMzU1IgogICAgIGlua3NjYXBlOndpbmRvdy14PSI0NSIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMjUiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcxMCIKICAgICBpbmtzY2FwZTpkb2N1bWVudC1yb3RhdGlvbj0iMCIKICAgICBzaG93Z3VpZGVzPSJ0cnVlIiAvPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9Ikdvb2dsZSIKICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjY5ODUzMzAyLDAsMCwtMC42OTg1Mjk0MSwxLDMpIgogICAgIGlkPSJ1c2UyNDYwIj4KICAgIDxwYXRoCiAgICAgICBpZD0icGF0aDMwNTMiCiAgICAgICBkPSJtIDAuNywtNTIuNiBjIDAsMjkgMjQuMyw1Mi41IDUzLjMsNTIuNSAxNiwwIDI3LjQsLTYuMyAzNiwtMTQuNSBMIDc5LjgsLTI0LjcgYyAtNi4xLDUuOCAtMTQuNCwxMC4zIC0yNS44LDEwLjMgLTIxLjEsMCAtMzcuNiwtMTcgLTM3LjYsLTM4LjEgMCwtMjEuMSAxNi41LC0zOC4xIDM3LjYsLTM4LjEgMTMuNywwIDIxLjUsNS41IDI2LjUsMTAuNSA0LjEsNC4xIDYuOCwxMCA3LjgsMTggSCA1NCB2IDE0LjMgaCA0OC4zIGMgMC41LC0yLjYgMC44LC01LjYgMC44LC05IDAsLTEwLjggLTIuOSwtMjQuMSAtMTIuNCwtMzMuNSBDIDgxLjQsLTk5LjkgNjkuNiwtMTA1IDU0LC0xMDUgMjUsLTEwNSAwLjcsLTgxLjUgMC43LC01Mi42IFoiCiAgICAgICBmaWxsPSIjNDI4NWY0IiAvPgogICAgPHBhdGgKICAgICAgIGlkPSJwYXRoMzA1NSIKICAgICAgIGQ9Im0gMTQyLC0zNy41IGMgLTE4LjcsMCAtMzMuOSwtMTQuMiAtMzMuOSwtMzMuOCAwLC0xOS41IDE1LjIsLTMzLjggMzMuOSwtMzMuOCAxOC43LDAgMzMuOSwxNC4zIDMzLjksMzMuOCAwLDE5LjYgLTE1LjIsMzMuOCAtMzMuOSwzMy44IHogbSAwLC01NC4yIGMgLTEwLjIsMCAtMTkuMSw4LjQgLTE5LjEsMjAuNSAwLDEyLjIgOC44LDIwLjUgMTkuMSwyMC41IDEwLjIsMCAxOS4xLC04LjMgMTkuMSwtMjAuNSAwLC0xMi4xIC04LjksLTIwLjUgLTE5LjEsLTIwLjUgeiIKICAgICAgIGZpbGw9IiNlYTQzMzUiIC8+CiAgICA8cGF0aAogICAgICAgaWQ9InBhdGgzMDU3IgogICAgICAgZD0ibSAyMTYsLTM3LjUgYyAtMTguNywwIC0zMy45LC0xNC4yIC0zMy45LC0zMy44IDAsLTE5LjUgMTUuMiwtMzMuOCAzMy45LC0zMy44IDE4LjcsMCAzMy45LDE0LjMgMzMuOSwzMy44IDAsMTkuNiAtMTUuMiwzMy44IC0zMy45LDMzLjggeiBtIDAsLTU0LjIgYyAtMTAuMiwwIC0xOS4xLDguNCAtMTkuMSwyMC41IDAsMTIuMiA4LjgsMjAuNSAxOS4xLDIwLjUgMTAuMywwIDE5LjEsLTguMyAxOS4xLC0yMC41IDAsLTEyLjEgLTguOSwtMjAuNSAtMTkuMSwtMjAuNSB6IgogICAgICAgZmlsbD0iI2ZiYmMwNSIgLz4KICAgIDxwYXRoCiAgICAgICBpZD0icGF0aDMwNTkiCiAgICAgICBkPSJNIDMwNi44LC0zOS41IFYgLTQ1IGggLTAuNSBjIC0zLjMsNCAtOS43LDcuNiAtMTcuOCw3LjYgLTE2LjksMCAtMzIuNCwtMTQuOCAtMzIuNCwtMzMuOSAwLC0xOC45IDE1LjUsLTMzLjcgMzIuNCwtMzMuNyA4LjEsMCAxNC41LDMuNiAxNy44LDcuNyBoIDAuNSB2IC00LjkgYyAwLC0xMi45IC02LjksLTE5LjggLTE4LC0xOS44IC05LjEsMCAtMTQuNyw2LjUgLTE3LDEyIGwgLTEyLjksLTUuNCBjIDMuNywtOSAxMy42LC0yMCAzMCwtMjAgMTcuNCwwIDMyLjEsMTAuMiAzMi4xLDM1LjIgdiA2MC43IHogbSAtMTcsLTUyLjIgYyAtMTAuMiwwIC0xOC44LDguNiAtMTguOCwyMC40IDAsMTEuOSA4LjYsMjAuNiAxOC44LDIwLjYgMTAuMSwwIDE4LC04LjcgMTgsLTIwLjYgMC4xLC0xMS45IC03LjksLTIwLjQgLTE4LC0yMC40IHoiCiAgICAgICBmaWxsPSIjNDI4NWY0IiAvPgogICAgPHBvbHlnb24KICAgICAgIGlkPSJwb2x5Z29uMzA2MSIKICAgICAgIHBvaW50cz0iMzQ2LC0xMDMgMzMxLjIsLTEwMyAzMzEuMiwtMy43IDM0NiwtMy43ICIKICAgICAgIGZpbGw9IiMzNGE4NTMiIC8+CiAgICA8cGF0aAogICAgICAgaWQ9InBhdGgzMDYzIgogICAgICAgZD0ibSAzODYuNywtOTEuNyBjIC03LjYsMCAtMTIuOSwzLjUgLTE2LjQsMTAuMiBsIDQ1LjIsMTguNyAtMS41LDMuOCBjIC0yLjgsNy42IC0xMS40LDIxLjUgLTI4LjksMjEuNSAtMTcuNCwwIC0zMS45LC0xMy43IC0zMS45LC0zMy44IDAsLTE4LjkgMTQuMywtMzMuOCAzMy41LC0zMy44IDE1LjUsMCAyNC40LDkuNSAyOC4yLDE1IGwgLTExLjUsNy43IGMgLTMuOSwtNS42IC05LjEsLTkuMyAtMTYuNywtOS4zIHogbSAtMS4xLDQxLjIgYyA1LjksMCAxMC45LC0yLjkgMTIuNSwtNy4yIGwgLTMwLjIsLTEyLjUgYyAtMC40LDEzIDEwLjEsMTkuNyAxNy43LDE5LjcgeiIKICAgICAgIGZpbGw9IiNlYTQzMzUiIC8+CiAgICA8cG9seWdvbgogICAgICAgaWQ9InBvbHlnb24zMDY1IgogICAgICAgcG9pbnRzPSIwLC0xMzYgNDE2LC0xMzYgNDE2LDAgMCwwICIKICAgICAgIGZpbGw9Im5vbmUiIC8+CiAgPC9nPgogIDxnCiAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7d2hpdGUtc3BhY2U6cHJlO3NoYXBlLWluc2lkZTp1cmwoI3JlY3QzMDc3KTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgaWQ9InRleHQzMDc1IgogICAgIHRyYW5zZm9ybT0ibWF0cml4KDIuMjcwNzEwNCwwLDAsMi4yNzA3MTA0LDE4My42MjQ2OCwzMDkuOTQxNzUpIgogICAgIGFyaWEtbGFiZWw9ImZvciBTdGFydHVwcyI+CiAgICA8cGF0aAogICAgICAgaWQ9InBhdGgzMDk5IgogICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1mYW1pbHk6UHJvZHVjdFNhbnM7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpQcm9kdWN0U2FucztmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNTQxMTc2IgogICAgICAgZD0ibSA2OC4xNzY0ODQsLTEzMi4xMzEwOCBxIDIsMCAzLjI4LDAuNjggbCAtMSwzLjI0IHEgLTAuOTYsLTAuNDggLTIuMTYsLTAuNDggLTEuMzYsMCAtMi4yNCwwLjk2IC0wLjg0LDAuOTIgLTAuODQsMi40OCB2IDIuNDggaCA1LjEyIHYgMy4zNiBoIC01LjEyIHYgMTYuMjQgaCAtMy42OCB2IC0xNi4yNCBoIC0zLjY4IHYgLTMuMzYgaCAzLjY4IHYgLTIuODQgcSAwLC0yLjkyIDEuODQsLTQuNzIgMS44OCwtMS44IDQuOCwtMS44IHoiIC8+CiAgICA8cGF0aAogICAgICAgaWQ9InBhdGgzMTAxIgogICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1mYW1pbHk6UHJvZHVjdFNhbnM7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpQcm9kdWN0U2FucztmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNTQxMTc2IgogICAgICAgZD0ibSA3MS41MzIxMDksLTExMi45NzEwOCBxIDAsLTQuNTIgMi44NCwtNy40OCAyLjg4LC0yLjk2IDcuMjQsLTIuOTYgNC4zNiwwIDcuMiwyLjk2IDIuODgsMi45NiAyLjg4LDcuNDggMCw0LjU2IC0yLjg4LDcuNDggLTIuODQsMi45NiAtNy4yLDIuOTYgLTQuMzYsMCAtNy4yNCwtMi45NiAtMi44NCwtMi45NiAtMi44NCwtNy40OCB6IG0gMy42OCwwIHEgMCwzLjE2IDEuODQsNS4xMiAxLjg0LDEuOTYgNC41NiwxLjk2IDIuNzIsMCA0LjU2LC0xLjk2IDEuODQsLTEuOTYgMS44NCwtNS4xMiAwLC0zLjEyIC0xLjg0LC01LjA4IC0xLjg4LC0yIC00LjU2LC0yIC0yLjY4LDAgLTQuNTYsMiAtMS44NCwxLjk2IC0xLjg0LDUuMDggeiIgLz4KICAgIDxwYXRoCiAgICAgICBpZD0icGF0aDMxMDMiCiAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LWZhbWlseTpQcm9kdWN0U2FuczstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOlByb2R1Y3RTYW5zO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC41NDExNzYiCiAgICAgICBkPSJtIDk4LjM2MzM1OSwtMTAzLjE3MTA4IGggLTMuNjggdiAtMTkuNiBoIDMuNTIgdiAzLjIgaCAwLjE2IHEgMC41NiwtMS41NiAyLjI4MDAwMSwtMi42NCAxLjc2LC0xLjEyIDMuNDQsLTEuMTIgMS42LDAgMi43MiwwLjQ4IGwgLTEuMTIsMy41NiBxIC0wLjY4LC0wLjI4IC0yLjE2LC0wLjI4IC0yLjA4LDAgLTMuNjQwMDAxLDEuNjggLTEuNTIsMS42OCAtMS41MiwzLjkyIHoiIC8+CiAgICA8cGF0aAogICAgICAgaWQ9InBhdGgzMTA1IgogICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1mYW1pbHk6UHJvZHVjdFNhbnM7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpQcm9kdWN0U2FucztmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNTQxMTc2IgogICAgICAgZD0ibSAxMzUuMTkwODYsLTExMC44MTEwOCBxIDAsMy43NiAtMi43Niw2LjA0IC0yLjgsMi4yNCAtNi44LDIuMjQgLTMuNTYsMCAtNi4yOCwtMi4wOCAtMi43MiwtMi4wOCAtMy43NiwtNS42OCBsIDMuNTIsLTEuNDQgcSAwLjM2LDEuMjggMSwyLjMyIDAuNjQsMS4wNCAxLjQ4LDEuOCAwLjg4LDAuNzIgMS45MiwxLjE2IDEuMDQsMC40IDIuMiwwLjQgMi41MiwwIDQuMTIsLTEuMjggMS42LC0xLjMyIDEuNiwtMy40OCAwLC0xLjggLTEuMzIsLTMuMDggLTEuMjQsLTEuMjQgLTQuNjQsLTIuNCAtMy40NCwtMS4yNCAtNC4yOCwtMS42OCAtNC41NiwtMi4zMiAtNC41NiwtNi44NCAwLC0zLjE2IDIuNTIsLTUuNCAyLjU2LC0yLjI0IDYuMjgsLTIuMjQgMy4yOCwwIDUuNjgsMS42OCAyLjQsMS42NCAzLjIsNC4xMiBsIC0zLjQ0LDEuNDQgcSAtMC40OCwtMS42IC0xLjkyLC0yLjY0IC0xLjQsLTEuMDggLTMuNDQsLTEuMDggLTIuMTYsMCAtMy42NCwxLjIgLTEuNDgsMS4xMiAtMS40OCwyLjkyIDAsMS40OCAxLjE2LDIuNTYgMS4yOCwxLjA4IDUuNTYsMi41NiA0LjM2LDEuNDggNi4yLDMuNjQgMS44OCwyLjEyIDEuODgsNS4yNCB6IiAvPgogICAgPHBhdGgKICAgICAgIGlkPSJwYXRoMzEwNyIKICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtZmFtaWx5OlByb2R1Y3RTYW5zOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246UHJvZHVjdFNhbnM7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjU0MTE3NiIKICAgICAgIGQ9Im0gMTQ1LjcyNDYxLC0xMDIuODUxMDggcSAtMi40LDAgLTQsLTEuNDggLTEuNTYsLTEuNDggLTEuNiwtNC4xMiB2IC0xMC45NiBoIC0zLjQ0IHYgLTMuMzYgaCAzLjQ0IHYgLTYgaCAzLjY4IHYgNiBoIDQuOCB2IDMuMzYgaCAtNC44IHYgOS43NiBxIDAsMS45NiAwLjc2LDIuNjggMC43NiwwLjY4IDEuNzIsMC42OCAwLjQ0LDAgMC44NCwtMC4wOCAwLjQ0LC0wLjEyIDAuOCwtMC4yOCBsIDEuMTYsMy4yOCBxIC0xLjQ0LDAuNTIgLTMuMzYsMC41MiB6IiAvPgogICAgPHBhdGgKICAgICAgIGlkPSJwYXRoMzEwOSIKICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtZmFtaWx5OlByb2R1Y3RTYW5zOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246UHJvZHVjdFNhbnM7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjU0MTE3NiIKICAgICAgIGQ9Im0gMTU0LjM5NDYxLC0xMDkuMTcxMDggcSAwLDEuNDQgMS4yLDIuNCAxLjI0LDAuOTYgMi44OCwwLjk2IDIuMzIsMCA0LjEyLC0xLjcyIDEuODQsLTEuNzIgMS44NCwtNC4wNCAtMS43MiwtMS4zNiAtNC44LC0xLjM2IC0yLjI0LDAgLTMuNzYsMS4wOCAtMS40OCwxLjA4IC0xLjQ4LDIuNjggeiBtIDQuNzYsLTE0LjI0IHEgNC4wOCwwIDYuNDQsMi4yIDIuMzYsMi4xNiAyLjM2LDUuOTYgdiAxMi4wOCBoIC0zLjUyIHYgLTIuNzIgaCAtMC4xNiBxIC0yLjI4LDMuMzYgLTYuMDgsMy4zNiAtMy4yNCwwIC01LjQ0LC0xLjkyIC0yLjE2LC0xLjkyIC0yLjE2LC00LjggMCwtMy4wNCAyLjI4LC00Ljg0IDIuMzIsLTEuOCA2LjE2LC0xLjggMy4yOCwwIDUuNCwxLjIgdiAtMC44NCBxIDAsLTEuOTIgLTEuNTIsLTMuMjQgLTEuNTIsLTEuMzYgLTMuNTYsLTEuMzYgLTMuMDgsMCAtNC44OCwyLjYgbCAtMy4yNCwtMi4wNCBxIDIuNjgsLTMuODQgNy45MiwtMy44NCB6IiAvPgogICAgPHBhdGgKICAgICAgIGlkPSJwYXRoMzExMSIKICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtZmFtaWx5OlByb2R1Y3RTYW5zOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246UHJvZHVjdFNhbnM7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eTowLjU0MTE3NiIKICAgICAgIGQ9Im0gMTk1LjA2NTIzLC0xMDIuODUxMDggcSAtMi40LDAgLTQsLTEuNDggLTEuNTYsLTEuNDggLTEuNiwtNC4xMiB2IC0xMC45NiBoIC0zLjQ0IHYgLTMuMzYgaCAzLjQ0IHYgLTYgaCAzLjY4IHYgNiBoIDQuOCB2IDMuMzYgaCAtNC44IHYgOS43NiBxIDAsMS45NiAwLjc2LDIuNjggMC43NiwwLjY4IDEuNzIsMC42OCAwLjQ0LDAgMC44NCwtMC4wOCAwLjQ0LC0wLjEyIDAuOCwtMC4yOCBsIDEuMTYsMy4yOCBxIC0xLjQ0LDAuNTIgLTMuMzYsMC41MiB6IG0gLTIyLjk2LC0xOS45MiBoIDMuNTIgdiAzLjIgaCAwLjE2IHEgMS42NCwtMy43NiA2Ljc2LC0zLjc2IGwgMC43NiwwLjA4IHYgMy44NCBsIC0xLjY0LC0wLjE2IHEgLTIuNTYsMCAtNC4yNCwxLjYgLTEuNjQsMS41NiAtMS42NCw0IHYgMTAuOCBoIC0zLjY4IHoiIC8+CiAgICA8cGF0aAogICAgICAgaWQ9InBhdGgzMTEzIgogICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1mYW1pbHk6UHJvZHVjdFNhbnM7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpQcm9kdWN0U2FucztmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNTQxMTc2IgogICAgICAgZD0ibSAyMTguNjgwMjMsLTEwMy4xNzEwOCBoIC0zLjUyIHYgLTIuNzIgaCAtMC4xNiBxIC0wLjg0LDEuNDQgLTIuNiwyLjQgLTEuNzIsMC45NiAtMy42LDAuOTYgLTMuNiwwIC01LjU2LC0yLjA0IC0xLjkyLC0yLjA4IC0xLjkyLC01Ljg4IHYgLTEyLjMyIGggMy42OCB2IDEyLjA4IHEgMC4xMiw0LjggNC44NCw0LjggMi4yLDAgMy42OCwtMS43NiAxLjQ4LC0xLjggMS40OCwtNC4yOCB2IC0xMC44NCBoIDMuNjggeiIgLz4KICAgIDxwYXRoCiAgICAgICBpZD0icGF0aDMxMTUiCiAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LWZhbWlseTpQcm9kdWN0U2FuczstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOlByb2R1Y3RTYW5zO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MC41NDExNzYiCiAgICAgICBkPSJtIDIzMi43OTg5OCwtMTA1Ljg5MTA4IHEgMi42NCwwIDQuNDQsLTIgMS44LC0xLjk2IDEuOCwtNS4wOCAwLC0zLjA4IC0xLjgsLTUuMDggLTEuOCwtMiAtNC40NCwtMiAtMi42OCwwIC00LjQ4LDIgLTEuNzYsMiAtMS43Niw1LjA4IDAsMy4xMiAxLjc2LDUuMTIgMS44LDEuOTYgNC40OCwxLjk2IHogbSAwLjYsMy4zNiBxIC0yLjE2LDAgLTMuOTYsLTAuOTIgLTEuNzYsLTAuOTIgLTIuNzIsLTIuNDQgaCAtMC4xNiBsIDAuMTYsMi43MiB2IDguNjQwMDA0IGggLTMuNjggdiAtMjguMjQwMDA0IGggMy41MiB2IDIuNzIgaCAwLjE2IHEgMC45NiwtMS41MiAyLjcyLC0yLjQ0IDEuOCwtMC45MiAzLjk2LC0wLjkyIDMuODgsMCA2LjU2LDMuMDQgMi43NiwzLjA4IDIuNzYsNy40IDAsNC4zNiAtMi43Niw3LjQgLTIuNjgsMy4wNCAtNi41NiwzLjA0IHoiIC8+CiAgICA8cGF0aAogICAgICAgaWQ9InBhdGgzMTE3IgogICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1mYW1pbHk6UHJvZHVjdFNhbnM7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpQcm9kdWN0U2FucztmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjAuNTQxMTc2IgogICAgICAgZD0ibSAyNjAuODU1MjMsLTEwOC42MTEwOCBxIDAsMi41NiAtMi4yNCw0LjMyIC0yLjI0LDEuNzYgLTUuNjQsMS43NiAtMi45NiwwIC01LjIsLTEuNTIgLTIuMjQsLTEuNTYgLTMuMiwtNC4wOCBsIDMuMjgsLTEuNCBxIDAuNzIsMS43NiAyLjA4LDIuNzYgMS40LDAuOTYgMy4wNCwwLjk2IDEuNzYsMCAyLjkyLC0wLjc2IDEuMiwtMC43NiAxLjIsLTEuOCAwLC0xLjg4IC0yLjg4LC0yLjc2IGwgLTMuMzYsLTAuODQgcSAtNS43MiwtMS40NCAtNS43MiwtNS41MiAwLC0yLjY4IDIuMTYsLTQuMjggMi4yLC0xLjY0IDUuNiwtMS42NCAyLjYsMCA0LjY4LDEuMjQgMi4xMiwxLjI0IDIuOTYsMy4zMiBsIC0zLjI4LDEuMzYgcSAtMC41NiwtMS4yNCAtMS44NCwtMS45MiAtMS4yNCwtMC43MiAtMi44LC0wLjcyIC0xLjQ0LDAgLTIuNiwwLjcyIC0xLjEyLDAuNzIgLTEuMTIsMS43NiAwLDEuNjggMy4xNiwyLjQgbCAyLjk2LDAuNzYgcSA1Ljg0LDEuNDQgNS44NCw1Ljg4IHoiIC8+CiAgPC9nPgo8L3N2Zz4K"
          className={styles.partnerImg}
        />
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
      <motion.div {...whileInViewAnimation} className={styles.contactUsText}>
        Stay tuned for updates 📢 as we continue to innovate and move forward
        🚀.
      </motion.div>
      <motion.a {...whileInViewAnimation}  className={styles.button} href="mailto:support@pleisto.com">
        <ArrowRight className={styles.buttonIcon} />
        <Translate>Sent Email</Translate>
      </motion.a>
    </ContentContainer>
  );
}

function Footer() {
  const { siteConfig } = useDocusaurusContext();
  const STATIC_ROOT = siteConfig.baseUrl;

  return (
    <footer>
      <ContentContainer level={2}>
        <motion.div {...whileInViewAnimation} className={styles.footerLayout}>
          <div className={styles.companyInfo}>
            <img
              className={styles.footerLogo}
              src={STATIC_ROOT + "img/logo.svg"}
            />
            <div className={clsx(styles.socialMedias, styles.mobile)}>
             
              <div className={styles.socialMedia}>
                <a href="https://twitter.com/pleistohq" target="_blank">
                  <img src={STATIC_ROOT + "img/social-medias/twitter.png"} />
                  </a>
              </div>
              <div className={styles.socialMedia}>
                <a href="https://githun.com/pleisto" target="_blank">
                  <img src={STATIC_ROOT + "img/social-medias/github.png"} />
                  </a>
              </div>
            </div>
            <div className={clsx(styles.copyright, styles.footerText)}>
              <Translate>© 2024 Pleisto. All rights reserved. </Translate>
            </div>
            
          </div>
          <div className={styles.footerColumn}>
            <a href="#about-us" className={styles.footerColumnHead}>
              <Translate>About us</Translate>
            </a>
          </div>
          <div className={styles.footerColumn}>
            <a href="ai-solutions" className={styles.footerColumnHead}>
              <Translate>Products & Services</Translate>
            </a>
            <div className={styles.footerItems}>
              <div className={clsx(styles.footerText, styles.footerItem)}>
                Flappy
              </div>
              <div className={clsx(styles.footerText, styles.footerItem)}>
                SynchronicityLLM
              </div>
              <div className={clsx(styles.footerText, styles.footerItem)}>
                Mash Diffusion
              </div>
              <div className={clsx(styles.footerText, styles.footerItem)}>
                Model Customization
              </div>
            </div>
          </div>
      
          <div className={styles.footerColumn}>
            <a href="#core-members" className={styles.footerColumnHead}>
              <Translate>Core Members</Translate>
            </a>
          </div>
          {/* <div className={styles.footerColumn}>
            <a href="#partners" className={styles.footerColumnHead}>
              <Translate>Our Partner</Translate>
            </a>
          </div> */}
          <div className={styles.footerColumn}>
            <a href="#contact-us" className={styles.footerColumnHead}>
              <Translate>Contact us</Translate>
            </a>
          </div>
          <div className={clsx(styles.socialMedias, styles.desktop)}>
         
            <div className={styles.socialMedia}>
              <a href="https://twitter.com/pleistohq" target="_blank">
                <img src={STATIC_ROOT + "img/social-medias/twitter.png"} />
                </a>
            </div>
            <div className={styles.socialMedia}>
              <a href="https://githun.com/pleisto" target="_blank">
                <img src={STATIC_ROOT + "img/social-medias/github.png"} />
                </a>
            </div>
          </div>
        </motion.div>
      </ContentContainer>
    </footer>
  );
}

export default function LandingPage() {
  const { siteConfig } = useDocusaurusContext();
  //  <Introduction />
  return (
    <Layout
      title={siteConfig.title}
      description=""
      wrapperClassName={styles.page}
    >
      <Header />
      <main>
       
        <AboutUs />
        <AISolutions />
        <CoreMembers />
         <Partners /> 
        <ContactUs />
      </main>
      <Footer />
    </Layout>
  );
}
