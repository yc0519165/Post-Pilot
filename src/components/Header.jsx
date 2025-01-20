import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [resource, setResource] = useState(false);
  const [company, setCompany] = useState(false);
  const navigate = useNavigate();
  const funel = [
    {
      head: " Propecting",
      text: "Hyper-target & aquire new customers via postcards postcards or exclusive Cardaloga.",
      logo: <img src="/src/assets/demo.svg" alt="" />,
      path: "/solution/prospective",
    },
    {
      head: " Retargeting",
      text: "Use direct mail to get email prospects or website visitors to convert.",
      logo: <img src="/src/assets/demo.svg" alt="" />,
      path: "/solution/retargeting",
    },
    {
      head: " Retention & Reactivation",
      text: "Win back unengaged ot lost customers. Delight VIPs. Boost promotional events.",
      logo: <img src="/src/assets/demo.svg" alt="" />,
      path: "/solution/retantion",
    },
  ];
  const funelPath = (path) => {
    navigate(path);
  };
  const featured = [
    {
      text: "CPG",
      img: <i class="bx bx-package"></i>,
      path: "/solution/cpg",
    },
    {
      text: "Apperial & Accessories",
      img: <i class="bx bx-package"></i>,
      path: "/solution/apperial",
    },
    {
      text: "Home Furnishings",
      img: <i class="bx bx-package"></i>,
      path: "/solution/homeFurnished",
    },
    {
      text: "Pet Supplies",
      img: <i class="bx bx-package"></i>,
      path: "/solution/petSupplies",
    },
    {
      text: "THC/CBD",
      img: <i class="bx bx-package"></i>,
      path: "/solution/thccbd",
    },
  ];

  const featuredPath = (path) => {
    navigate(path);
  };

  const resourses = [
    {
      heading: "FAQs",
      text: "Instant answers to your questions.",
      path: "/resource/faqs",
    },
    {
      heading: "PostPilot Blogs",
      text: "The source for direct mail news, trends, and tactics.",
      path: "/resource/postPilotBlogs",
    },
    {
      heading: "Design Studio",
      text: "Examples of greate creative from our in-house temp.",
      path: "/resource/designStudio",
    },
    {
      heading: "Nerd Marketing Podcast",
      text: "50 years of ecomm. 100% Nerd.",
      path: "/resource/nerdMarketing",
    },
  ];

  const resourcePath = (path) => {
    navigate(path);
  };

  const companyItem = [
    {
      heading: "About us",
      text: "The story & team behind PostPilot.",
      path: "/company/aboutus",
    },
    {
      heading: "Partner",
      text: "Add direct mail to your agency offering or refer brands to us.",
      path: "/company/partner",
    },
    {
      heading: "Inegrations",
      text: "PostPilot plays well with others.",
      path: "/company/integration",
    },
    {
      heading: "Contact",
      text: "Get in touch with our experts.",
      path: "/company/contact",
    },
  ];

  const companyPath = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="header px-28 py-5 bg-[#fff] flex items-center justify-between">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img src={assets.postLogo} alt="" className="w-[175px]" />
        </div>
        <div className="h-full">
          <ul className="flex gap-12 text-sm font-semibold text-[#2E2F34]">
            <li
              className=" hover:text-[#398bc7] cursor-pointer transition-[0.9s] relative -tracking-tighter border-b-2"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              SOLUTIONS{" "}
              {isOpen && (
                <div className="w-[850px] p-5 bg-[#fff] absolute">
                  <div className="flex gap-3 w-auto">
                    <div className="flex flex-col w-[50%] px-5">
                      <p className="text-gray-500 font-medium text-base py-3">
                        Full-Funnel capabilities
                      </p>
                      {funel.map((item, id) => {
                        return (
                          <div
                            onClick={() => funelPath(item.path)}
                            key={id}
                            className="hover:bg-[#64b9f541] transition-[0.7s] flex gap-4 p-3"
                          >
                            <p className="h-14 w-14">{item.logo}</p>
                            <div className="flex flex-col">
                              <h3 className="text-xl text-[#000] font-semibold">
                                {item.head}
                              </h3>
                              <span className="text-sm font-medium text-gray-500">
                                {item.text}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className=" flex flex-col gap-1 p-4 w-[50%]">
                      <p className="text-gray-500 font-medium text-base">
                        Featured Categories
                      </p>
                      {featured.map((item) => {
                        return (
                          <div
                            onClick={() => featuredPath(item.path)}
                            className="flex hover:bg-[#64b9f541] transition-[0.7s] p-4 gap-5 items-center"
                          >
                            <p>{item.img}</p>
                            <h2 className="text-xl font-bold text-black">
                              {item.text}
                            </h2>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li
              onClick={() => navigate("/successStories")}
              className=" hover:text-[#398bc7] cursor-pointer transition-[0.9s] -tracking-tighter"
            >
              SUCCESS STORIES
            </li>
            <li
              className=" hover:text-[#398bc7] cursor-pointer relative transition-[0.9s] -tracking-tighter"
              onMouseEnter={() => setResource(true)}
              onMouseLeave={() => setResource(false)}
            >
              RESOURCES
              {resource && (
                <div className="w-[360px] p-5 bg-white absolute">
                  {resourses.map((item, id) => {
                    return (
                      <div
                        onClick={() => resourcePath(item.path)}
                        key={id}
                        className="hover:bg-[#64b9f541] transition-[0.7s] flex gap-4 p-3"
                      >
                        <div className="flex flex-col">
                          <h3 className="text-xl text-[#000] font-semibold">
                            {item.heading}
                          </h3>
                          <span className="text-sm font-medium text-gray-500">
                            {item.text}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </li>
            <li
              className=" hover:text-[#398bc7] cursor-pointer relative transition-[0.9s] -tracking-tighter"
              onMouseEnter={() => setCompany(true)}
              onMouseLeave={() => setCompany(false)}
            >
              COMPANY
              {company && (
                <div className="w-[350px] bg-white p-5 absolute">
                  {companyItem.map((item, id) => {
                    return (
                      <div
                        onClick={() => companyPath(item.path)}
                        key={id}
                        className="hover:bg-[#64b9f541] transition-[0.7s] flex gap-4 p-3"
                      >
                        <div className="flex flex-col">
                          <h3 className="text-xl text-[#000] font-semibold">
                            {item.heading}
                          </h3>
                          <span className="text-sm font-medium text-gray-500">
                            {item.text}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </li>
            <li
              onClick={() => navigate("/pricing")}
              className=" hover:text-[#398bc7] cursor-pointer transition-[0.9s] -tracking-tighter"
            >
              PRICING
            </li>
          </ul>
        </div>
        <div className="flex gap-5">
          <button
            onClick={() => navigate("/login")}
            className="px-4 h-10 border-[#2E2F34] border-[2px] -tracking-tighter text-sm font-bold hover:bg-[#000] hover:text-[#fff] transition-[3000]"
          >
            LOGIN
          </button>
          <button
            onClick={() => navigate("/createAccount")}
            className="bg-[#6AB1F3] h-10 hover:bg-[#3076a8] transition-[0.9s] px-4 text-[#fff] font-semibold text-sm -tracking-tighter"
          >
            CREATE FREE ACCOUNT
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
