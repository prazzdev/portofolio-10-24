import ListStruct from "../ListStruct";
import ProjectBox from "../ProjectBox";
import TechStackIco from "../partials/TechStackIco";

export default function ProjectList() {
    return (
        <>
        <ListStruct title="Website">
            <ProjectBox 
                title="KPU BEM STB"
                desc="STIMIK Tunas Bangsa's BEM presidential election website"
                repoUrl="#"
                projectUrl="https://www.instagram.com/p/CkNqlJ7JQe1/"
            >
                <TechStackIco src="html.svg" />
                <TechStackIco src="tailwind.svg" />
                <TechStackIco src="php.svg" />
                <TechStackIco src="mysql.svg" />
            </ProjectBox>
            <ProjectBox 
                title="ShortTik"
                desc="Lightweight, Modern, Free and Open Source Link Shortener"
                repoUrl={"shorttik"}
                projectUrl="https://prazzdev.github.io/shorttik"
            >
                <TechStackIco src="html.svg" />
                <TechStackIco src="tailwind.svg" />
                <TechStackIco src="js.svg" />
            </ProjectBox>
            <ProjectBox 
                title="This is Kimi no Na Wa"
                desc="Describe about Kimi no Na Wa anime, the synopsis, the characters and many more."
                repoUrl={"kimi-no-na-wa"}
                projectUrl="https://prazzdev.github.io/kimi-no-na-wa"
            >
                <TechStackIco src="html.svg" />
                <TechStackIco src="css.svg" />
                <TechStackIco src="js.svg" />
                <TechStackIco src="tailwind.svg" />
            </ProjectBox>
            <ProjectBox 
                title="Bocchi The Rock!"
                desc="Landing Page of Bocchi the Rock Anime. Build with NextJS and TailwindCSS."
                repoUrl={"bocchi-the-rock-landpage"}
                projectUrl="https://bocchi-the-rock-landpage.vercel.app"
            >
                <TechStackIco src="next.svg" />
                <TechStackIco src="tailwind.svg" />
            </ProjectBox>
            <ProjectBox
                title="AnonyChat"
                desc="Sending secret message in anonymous, like NGL.LINK"
                repoUrl={"anonychat"}
                projectUrl="http://hi.talk4fun.net"
            >
                <TechStackIco src="html.svg" />
                <TechStackIco src="css.svg" />
                <TechStackIco src="php.svg" />
                <TechStackIco src="mysql.svg" />
            </ProjectBox>
            <ProjectBox
                title="EbookStack"
                desc="Ebook Downloader website. Find your ebook to read."
                repoUrl={"#"}
                projectUrl="http://ebookstack.xyz"
            >
                <TechStackIco src="html.svg" />
                <TechStackIco src="css.svg" />
                <TechStackIco src="php.svg" />
                <TechStackIco src="mysql.svg" />
            </ProjectBox>
            <ProjectBox
                title="PERPUSTUSA"
                desc="STIMIK Tunas Bangsa Banjarnegara's Online Library (Unofficial)"
                repoUrl="#"
                projectUrl="http://perpustusa.rf.gd"
            >
                <TechStackIco src="html.svg" />
                <TechStackIco src="css.svg" />
            </ProjectBox>
        </ListStruct>
        <ListStruct title="Bot">
            <ProjectBox
                title="Yuika BOT"
                desc="Telegram Bot (grammY) with many features you can using."
                repoUrl="#"
                projectUrl="https://t.me/yuikaa_bot"
            >
                <TechStackIco src="js.svg" />
                <TechStackIco src="node.webp" />   
                <TechStackIco src="express.webp" />
                <TechStackIco src="grammy.webp" />
                <TechStackIco src="axios.svg" />
                <TechStackIco src="cheerio.svg" />
            </ProjectBox>
            <ProjectBox
                title="Yuika Lyrics"
                desc="Telegram bot you can using to searching song lyric by song title."
                repoUrl="#"
                projectUrl="https://t.me/yuikaly_bot"
            >
                <TechStackIco src="js.svg" />
                <TechStackIco src="node.webp" />   
                <TechStackIco src="express.webp" />
                <TechStackIco src="telegraf.svg" />
                <TechStackIco src="axios.svg" />
                <TechStackIco src="cheerio.svg" />
            </ProjectBox>
            <ProjectBox
                title="TakNgintip BOT"
                desc="Telegram Bot to stalking Instagram user by username."
                repoUrl="#"
                projectUrl="https://t.me/takngintip_bot"
            >
                <TechStackIco src="js.svg" />
                <TechStackIco src="node.webp" />   
                <TechStackIco src="express.webp" />
                <TechStackIco src="telegraf.svg" />
                <TechStackIco src="axios.svg" />
            </ProjectBox>
        </ListStruct>
        <ListStruct title="API">
            <ProjectBox
                title="PRAZZAPIS"
                desc="Free Open Source API. Contain many REST API free to use."
                repoUrl="#"
                projectUrl="https://prazzapis.cyclic.app"
            >
                <TechStackIco src="js.svg" />
                <TechStackIco src="node.webp" />   
                <TechStackIco src="express.webp" />
                <TechStackIco src="axios.svg" />
                <TechStackIco src="cheerio.svg" />
            </ProjectBox>
        </ListStruct>
        <ListStruct title="Misc">
            {/* <ProjectBox /> */}
            <p>Not Available.</p>
        </ListStruct>
        </>
    )
}