import { FolderIcon } from "@heroicons/react/24/solid";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const folders = [
  {
    isFolder: true,
    name: "Root",
    items: [
      {
        isFolder: true,
        name: "Documents",
        items: [
          {
            isFolder: true,
            name: "Work"
          },
          {
            isFolder: true,
            name: "Projects",
            items: [
              {
                isFolder: true,
                name: "ProjectA"
              },
              {
                isFolder: true,
                name: "ProjectB"
              },
              {
                isFolder: false,
                name: "ReadMe.txt"
              }
            ]
          },
          {
            isFolder: false,
            name: "Notes.txt"
          }
        ]
      },
      {
        isFolder: true,
        name: "Pictures",
        items: [
          {
            isFolder: false,
            name: "Vacation.jpg"
          },
          {
            isFolder: false,
            name: "Family.png"
          }
        ]
      },
      {
        isFolder: false,
        name: "ToDo.txt"
      }
    ]
  },
  {
    isFolder: false,
    name: "GlobalSettings.cfg"
  }
];


export default function App() {
  return (
    <div className="m-5">
      <ul>
        {folders.map((item, i) => <Fold key={i} item={item} />)}
      </ul>
    </div>
  )
}

function Fold({ item }) {

  const [isOpen, setisOpen] = useState(false);

  if (item.isFolder) {
    return (
      <li className="ml-5 my-1">
        <span className="flex items-center gap-2">
          <ChevronRightIcon onClick={() => setisOpen(!isOpen)} className={`${isOpen ? "rotate-90" : ""} cursor-pointer size-4 text-gray-600`} />
          <FolderIcon className="size-6 text-blue-400" />
          {item.name}
        </span>

        <ul className={`${isOpen ? "block" : "hidden"}`}>
          {item.items?.map((items, i) => <Fold key={i} item={items} />)}
        </ul>

      </li>
    );
  }
  else {
    return (
      <li className="ml-5 my-1">
        <span className="flex items-center gap-2">
          <DocumentTextIcon className="size-6 text-gray-400" />
          {item.name}
        </span>
      </li>
    );
  }
}