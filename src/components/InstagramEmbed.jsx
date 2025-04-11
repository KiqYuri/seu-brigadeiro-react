import { useEffect } from "react";

const InstagramEmbedBlock = () => {
  useEffect(() => {
    const embedScriptId = "instagram-embed-script";

    if (!document.getElementById(embedScriptId)) {
      const script = document.createElement("script");
      script.id = embedScriptId;
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="flex justify-center px-4">
      <div className="rounded-2xl shadow-md bg-white border border-neutral-200 p-2 sm:p-4 max-w-[400px] w-full">
        <blockquote
          className="instagram-media w-full"
          data-instgrm-permalink="https://www.instagram.com/p/CwTl4KOLxun/"
          data-instgrm-version="14"
          style={{ border: 0 }}
        ></blockquote>
      </div>
    </div>
  );
};

export default InstagramEmbedBlock;
