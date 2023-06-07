import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { getAboutData } from "@/services/api";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [aboutData, setAboutData] = useState();

  useEffect(() => {
    getAboutData()
      .then((res) => {
        console.log(res);
        setAboutData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl rounded-b-none bg-blue-900/20 p-1 max-w-md ms-auto">
          {aboutData?.map((item) => (
            <Tab
              key={item.id}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow relative after:absolute after:bg-white after:w-full after:h-4 after:-bottom-2 after:left-0"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {item.attributes.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {aboutData?.map((item) => (
            <Tab.Panel
              key={item.id}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ReactMarkdown className="whitespace-pre-line px-10 text-justify mt-11 text-md tracking-wide">
                {item?.attributes.content}
              </ReactMarkdown>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
