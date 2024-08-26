import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

interface Props {
  list: string[];
  activeItem: string;
  category: string;
  onChange: (item: string) => void;
  menuItemsClassName?: any;
}

export const Filter: React.FC<Props> = ({
  list,
  activeItem,
  category,
  onChange,
  menuItemsClassName = "right-0 lg:origin-top-right"
}) => {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-3 text-base font-medium text-gray-700 bg-gray-400 rounded-xl bg-opacity-10 hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {category}: {activeItem}
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className={`z-50 absolute w-56 mt-2 bg-gray-50 divide-y divide-gray-100 rounded-xl shadow-lg focus:outline-none ${menuItemsClassName}`}>
            <div className="px-2 py-1">
              {list.map((item) => (
                <Menu.Item key={item}>
                  {({ active }) => {
                    return (
                      <button
                        onClick={() => onChange(item)}
                        className={`${
                          activeItem === item && "bg-gray-200"
                        } font-medium group flex rounded-md items-center w-full px-3 py-2 text-sm text-gray-900 hover:bg-gray-200 my-1`}
                      >
                        {item}
                      </button>
                    );
                  }}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};
