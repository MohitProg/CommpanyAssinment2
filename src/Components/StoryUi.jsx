import React from "react";
import moment from "moment";

const StoryUi = ({ value }) => {
  const tagvalue = value?._tags[0];
  const askhn = value?._tags?.includes("ask_hn");
  const showhn = value?._tags?.includes("show_hn");
  const lounchhn = value?._tags?.includes("launch_hn");
  const job = value?._tags?.includes("job");
  const poll = value?._tags?.includes("poll");

  return (
    <section className="">
      <article className="p-3 flex flex-col">
     
        {tagvalue === "story" || tagvalue === "job" || tagvalue === "poll" ? (
          <>
            <div className="flex w-full gap-1 items-center flex-wrap">
              <h1 className="text-sm font-semibold text-black">
                {value?.title}
              </h1>

              {tagvalue === "poll" || poll ? (
                ""
              ) : (
                <a
                className="text-sm break-words break-all hover:underline"
                href={value?.url}
              >
                ({value?.url})
              </a>
              )}
            </div>
          </>
        ) : (
          ""
        )}

        {tagvalue === "comment" || tagvalue === "job" || tagvalue === "poll" ? (
          <div className="flex items-center gap-2 ">
            <div className="px-1 text-xs hover:underline cursor-pointer border-r border-r-gray-500 text-gray-500">
              {value?.author}
            </div>
            <div className="px-1 text-xs hover:underline cursor-pointer border-r border-r-gray-500 text-gray-500">
              {moment(value.created_at).fromNow()}
            </div>

            <div className="px-1 text-xs hover:underline cursor-pointer border-r border-r-gray-500 text-gray-500">
              0 comments
            </div>

            {tagvalue === "job" || job || tagvalue == "poll" || poll ? (
              ""
            ) : (
              <>
                <div className="px-1 text-xs hover:underline cursor-pointer border-r border-r-gray-500 text-gray-500">
                  parent
                </div>
                <a
                  href={value?.story_url}
                  className="px-1 text-xs hover:underline cursor-pointer   text-gray-500"
                >
                  on : {value?.story_title}
                </a>
              </>
            )}
          </div>
        ) : (
          ""
        )}

        {tagvalue === "story" && (
          <div className="flex items-center gap-2 ">
            <div className="px-1 text-xs hover:underline cursor-pointer border-r border-r-gray-500 text-gray-500">
              {value?.points} points
            </div>
            <div className="px-1 text-xs hover:underline cursor-pointer border-r border-r-gray-500 text-gray-500">
              {value?.author}
            </div>
            <div className="px-1 text-xs hover:underline cursor-pointer border-r border-r-gray-500 text-gray-500">
              {moment(value?.created_at).fromNow()}
            </div>
            <div className="px-1 text-xs hover:underline cursor-pointer border-r border-r-gray-500 text-gray-500">
              {value?.num_comments} comments
            </div>
          </div>
        )}

        {askhn ? (
          <>
            <div
              className="text-sm  text-gray-700 font-semibold  leading-relaxed"
              dangerouslySetInnerHTML={{ __html: value?.story_text }}
            />
          </>
        ) : (
          ""
        )}

        {showhn ? (
          <>
            <div
              className="text-sm text-gray-700font-semibold break-words break-all  leading-relaxed"
              dangerouslySetInnerHTML={{ __html: value?.story_text }}
            />
          </>
        ) : (
          ""
        )}

        {lounchhn ? (
          <>
            <div
              className="text-sm text-gray-700font-semibold break-words break-all  leading-relaxed"
              dangerouslySetInnerHTML={{ __html: value?.story_text }}
            />
          </>
        ) : (
          ""
        )}
        {tagvalue == "comment" ? (
          <>
            <div
              className="text-sm text-gray-700font-semibold break-words break-all  leading-relaxed"
              dangerouslySetInnerHTML={{ __html: value?.comment_text }}
            />
          </>
        ) : (
          ""
        )}
      </article>
    </section>
  );
};

export default StoryUi;
