import { Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import './Dashboard.css'
const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Sample JSON data
    const sampleData = [
      {
        id: 1,
        name: [{

          productname: "Wix",
          image: "https://cdn-icons-png.flaticon.com/512/5968/5968770.png",
          chat: "2"
        }
        ],
        description: 'Developed a personilezed Lift',
        images: [
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80',
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        ],
        categories: [{
          name: 'Automation',
          color: '#e8ddfe',
          color2: '#4712bb',
        }
        ],
        meeting: [{
          name: '1 week',
          color: '#ddf9e4',
          color2: '#085b3a',
        }
        ],
        tags: [
          'DigitalTransformation',

        ]
      },
      {
        id: 2,
        name: [{

          productname: "Shopify",
          image: "https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-1024.png",
          chat: "2"
        }
        ],
        description: 'Introduce a cloudebase',

        images: [
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80',
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        ],
        categories: [{
          name: 'Ecommerce',
          color: '#feeee1',
          color2: '#753602',
        }, {
          name: 'B2B',
          color: '#fff3cc',
          color2: '#745a06',
        },
        ],
        tags: [
          'OnlineShopping',
          'Digital',

        ],
        meeting: [{
          name: 'Tommorrow',
          color: '#d1f1fb',
          color2: '#0a5a70',
        }
        ],
      },
      {
        id: 3,
        name: [{

          productname: "MailChimp",
          image: "https://cdn.icon-icons.com/icons2/2407/PNG/512/mailchimp_icon_146054.png",
          chat: "2"
        }
        ],
        description: 'Develope a Mobile app',

        images: [
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80',
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        ],
        categories: [{
          name: 'SAAS',
          color: '#ddf9e4',
          color2: '#075a39',
        }, {
          name: 'Mobile',
          color: '#fdf7c4',
          color2: '#62580e',
        },
        ],
        tags: [
          'TechInnovation',
          'Cloud',

        ],
        meeting: [{
          name: 'Tommorrow',
          color: '#d1f1fb',
          color2: '#0a5a70',
        }
        ],
      },
      {
        id: 4,
        name: [{

          productname: "Payple",
          image: "https://www.svgrepo.com/show/382731/pay-pal-paypal-payments-platform.svg",
          chat: "2"
        }
        ],
        description: 'This Program Could include',

        images: [
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80',
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        ],
        categories: [{
          name: 'Marketplace',
          color: '#ddf9e4',
          color2: '#0f603f',
        }
        ],
        tags: [
          'BuySellOnline',
          'OnlineManage',

        ],
        meeting: [{
          name: 'in 6 hrs',
          color: '#d5f7dd',
          color2: '#236f4f',
        }
        ],
      },
      {
        id: 5,
        name: [{

          productname: "Disney",
          image: "https://lumiere-a.akamaihd.net/v1/images/disney_logo_nov_2021_rbg_0fa74b54.jpeg?region=0%2C0%2C1920%2C1080",
          chat: "2"
        }
        ],
        description: 'Impliment an Ai Driven',

        images: [
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80',
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        ],
        categories: [{
          name: 'B2B',
          color: '#fff3cc',
          color2: '#705500',
        }, {
          name: 'B2C',
          color: '#f4fbcb',
          color2: '#505f07',
        },
        ],
        tags: [
          'BussinessPartnership',

        ],
        meeting: [{
          name: 'No Contact',
          color: '#ffebeb',
          color2: '#823433',
        }
        ],
      },
      {
        id: 6,
        name: [{

          productname: "Intercom",
          image: "https://www.clipartmax.com/png/middle/292-2927934_intercom-logo-intercom-logo.png",
          chat: "2"
        }
        ],
        description: 'Offer a Comprihensive',
        images: [
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80',
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        ],
        categories: [{
          name: 'Technology',
          color: '#e5eeff',
          color2: '#305190',
        }, {
          name: 'SAAS',
          color: '#ddf9e4',
          color2: '#0e603f',
        },
        ],
        tags: [
          'SmartFinanace',
          'SaasApi',

        ],
        meeting: [{
          name: 'in 1 hour',
          color: '#ddf9e4',
          color2: '#085a39',
        }
        ],
      },
      {
        id: 7,
        name: [{

          productname: "Google",
          image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
          chat: "2"
        }
        ],
        description: 'This Could include smart ',

        images: [
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80',
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80',
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
        ],
        categories: [{
          name: 'Finance',
          color: '#fff3cc',
          color2: '#705500',
        }, {
          name: 'Automation',
          color: '#f5f0ff',
          color2: '#4b17bd',
        },
        ],
        tags: [
          'SmartFinanace',
          'WorkFlow',

        ],
        meeting: [{
          name: '2 week',
          color: '#ddf9e4',
          color2: '#085a39',
        }
        ],
      },
      {
        id: 8,
        name: [{

          productname: "Evernote",
          image: "https://cdn-icons-png.flaticon.com/512/4494/4494685.png",
          chat: "2"
        }
        ],
        description: 'Launch An Advisery Service',

        images: [
          'https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg?w=826&t=st=1709641615~exp=1709642215~hmac=2fe0b69749e82913fd0e6c6461606e2c7f18723cf702d1fb0450128f4f661697',
          'https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?w=826&t=st=1709641614~exp=1709642214~hmac=377de4248f6c4f8f2115a885206cbfe1491fe55c1a67f5ec4f16cb3fac9bb5f7',
          'https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?w=826&t=st=1709641610~exp=1709642210~hmac=7b50623bab3e5f894554b35be17c30e6225b5fe4a371073beb47d1d5c603198b',

        ],
        categories: [{
          name: 'Transportation',
          color: '#fdf7c4',
          color2: '#6a6017',
        }
        ],
        meeting: [{
          name: 'Next Month',
          color: '#f4f5f6',
          color2: '#8c8e92',
        }
        ],
        tags: [
          'LogisticsTech',
          'UX',

        ]
      },
      {
        id: 9,
        name: [{

          productname: "Microsoft",
          image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
          chat: "2"
        }
        ],
        description: 'The Tool would anylize',

        images: [
          'https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?w=826&t=st=1709641610~exp=1709642210~hmac=7b50623bab3e5f894554b35be17c30e6225b5fe4a371073beb47d1d5c603198b',
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80',
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',

        ],
        categories: [{
          name: 'Publishing',
          color: '#feecf1',
          color2: '#791667',
        }, {
          name: 'B2C',
          color: '#f4fbcb',
          color2: '#586610',
        },
        ],
        meeting: [{
          name: 'No Contact',
          color: '#ffebeb',
          color2: '#792726',
        }
        ],
        tags: [
          'B2CMarketing',
          'Reatail',

        ]
      },
      {
        id: 10,
        name: [{

          productname: "Invision",
          image: "https://logowik.com/content/uploads/images/invision.jpg",
          chat: "2"
        }
        ],
        description: 'Description for Product 2',

        images: [
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80',
        ],
        categories: [{
          name: 'Web Services',
          color: '#daf4fc',
          color2: '#1c677b',
        }
        ],
        meeting: [{
          name: 'Next Month',
          color: '#f4f5f6',
          color2: '#75777c',
        }
        ],
        tags: [
          'ApiIntegration',

        ]
      },
    ];

    setData(sampleData);
  }, []);

  const customScrollbarStyles = {
    height: "100%", // Adjust the height as needed
    overflowY: "auto",
    overflowX: "auto",
    scrollbarWidth: "1px",
    scrollbarColor: "transparent transparent",
  };
  const [checked, setChecked] = React.useState([true, false]);
  const [searchInput, setSearchInput] = useState('');

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  return (
    <div className="m-0">
      <div className="border-2  rounded-lg ">
        <div className="flex-container py-3 px-5">
          <h1 style={{ fontSize: "22px" }}>Products</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Type in here…"
                className="p-1 pl-8 rounded-lg"
                style={{ border: "2px solid #eeeff1" }}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="bi bi-search"></i>
              </div>
            </div>
            <div
              className="px-2 p-1 rounded-lg"
              style={{ border: "2px solid #eeeff1" }}
            >
              <i class="bi bi-chat-right"></i>
            </div>
            <div
              className="px-2 p-1 rounded-lg"
              style={{ border: "2px solid #eeeff1" }}
            >
              <i class="bi bi-gear"></i>
            </div>
          </div>
        </div>
        <hr>
        </hr>
        <div className="flex-container">
          <div className="flex gap-2 items-center py-2 ">
            <div
              className="px-2 p-1 rounded-lg flex items-center gap-2"
              style={{ border: "2px solid #eeeff1", fontSize: "14px" }}
            >
              <i class="bi bi-grid" style={{ color: "#75777c" }}></i>
              All Brands
              <i class="bi bi-caret-down-fill" style={{ color: "#75777c" }}></i>
            </div>
            <div
              className="px-2 p-1 rounded-lg flex items-center gap-2"
              style={{ border: "2px solid #eeeff1", fontSize: "14px" }}
            >
              Desk
              <i class="bi bi-caret-down-fill" style={{ color: "#75777c" }}></i>
            </div>
            <div
              className="px-2 p-1 rounded-lg flex items-center gap-2"
              style={{ border: "2px solid #eeeff1", fontSize: "14px" }}
            >
              Tags
              <i class="bi bi-caret-down-fill" style={{ color: "#75777c" }}></i>
            </div>
            <div
              className="px-2 Sort  p-1 rounded-lg flex items-center gap-2"
              style={{ border: "2px solid #eeeff1", fontSize: "14px" }}
            >
              <i class="bi bi-sort-numeric-down" style={{ color: "#75777c" }}></i>
              Sort
            </div>
            <div
              className="px-2 Sort p-1 rounded-lg flex items-center gap-2"
              style={{ border: "2px solid #eeeff1", fontSize: "14px" }}
            >
              <i class="bi bi-sliders" style={{ color: "#75777c" }}></i>
              Filter
            </div>

          </div>
          <div className="py-2 flex items-center gap-4">
            <div
              className="px-2  p-1 rounded-lg flex items-center gap-2"
              style={{ border: "2px solid #eeeff1", fontSize: "14px" }}
            >
              <i class="bi bi-plus-lg"></i>
              Meeting
            </div>
            <div
              className="px-2  p-1 rounded-lg flex items-center gap-2"
              style={{ border: "2px solid #eeeff1", fontSize: "14px" }}
            >
              <i class="bi bi-cloud-arrow-down"></i>
              Import/Export
            </div>
          </div>
        </div>
        <div className="tableContainer">
          <div className="">
            <table className="min-w-full bg-white border border-collapse border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-3 border" style={{ color: "#77797d", fontSize: "12px" }}>
                    <div className="">
                      <label className="flex items-center justify-between gap-2">
                        <input
                          style={{ color: 'black', outline: 'none' }}
                          className="rounded"
                          type="checkbox"
                          checked={checked[0] && checked[1]}
                          indeterminate={checked[0] !== checked[1]}
                          onChange={handleChange1}
                        />
                        Brand <i className="bi bi-plus"></i>
                      </label>
                    </div>
                  </th>

                  <th className="py-2 border" style={{ color: "#77797d", fontSize: "12px" }}>Description</th>
                  <th className="py-2 border" style={{ color: "#77797d", fontSize: "12px" }}>Members</th>
                  <th className="py-2 border" style={{ color: "#77797d", fontSize: "12px" }}>Categories</th>
                  <th className="py-2 border" style={{ color: "#77797d", fontSize: "12px" }}>Tags</th>
                  <th className="py-2 border" style={{ color: "#77797d", fontSize: "12px" }}> Next Meeting</th>
                  <th className="py-2 px-1 border" style={{ color: "#77797d", fontSize: "12px" }}> + </th>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter((item) =>
                    item.name.some((name) =>
                      name.productname.toLowerCase().includes(searchInput.toLowerCase())
                    )
                  )
                  .map((item, index) => (
                    <React.Fragment key={index}>
                      <tr className="cursor-pointer hover:bg-gray-100">
                        <td className="py-3 border  px-3" style={{ width: "160px", maxWidth: "160px", overflowX: "auto", ...customScrollbarStyles }}>
                          {item.name.map((name, index) => (
                            <div key={index} className="" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "19px" }}>
                              <div className="flex items-center  gap-2">
                                <input
                                  style={{ color: 'black', outline: 'none' }}
                                  className="rounded"
                                  type="checkbox"
                                  checked={checked[0] && checked[1]}
                                  indeterminate={checked[0] !== checked[1]}
                                  onChange={handleChange1}
                                />
                                <img src={name.image} alt='logo' style={{ width: "15px", height: "15px", borderRadius: "3px" }} />
                                <div style={{ fontSize: "10px" }}>
                                  {name.productname}
                                </div>
                              </div>
                              <div className="flex items-center gap-1" style={{ fontSize: "9px" }}>
                                <i className="bi bi-chat"></i> {name.chat}
                              </div>
                            </div>

                          ))}
                        </td>

                        <td className="py-2 px-2 border" style={{ width: "200px", maxWidth: "200px", overflowX: "auto", ...customScrollbarStyles }} >
                          <div style={{ fontSize: "12px" }}>

                            {item.description}
                          </div>

                        </td>
                        <td className="py-2 px-2 border" style={{ width: "130px", maxWidth: "120px", overflowX: "auto", ...customScrollbarStyles }}>
                          <div className="flex items-center">
                            {item.images.map((image, index) => (
                              <img
                                key={index}
                                className="object-cover w-5 h-5 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                src={image}
                                alt={`Product ${item.id} Image ${index + 1}`}
                              />
                            ))}

                          </div>
                        </td>

                        <td className="py-2 border" style={{ width: "150px", maxWidth: "160px", overflowX: "auto", ...customScrollbarStyles }}>{item.categories.map((category, index) => (
                          <div
                            key={category.name} // Using a unique identifier if available
                            class="inline px-3 py-1 text-sm font-normal rounded-lg  text-emerald-500 gap-x-2"
                            style={{
                              backgroundColor: category.color,
                              margin: '5px',
                              color: category.color2,
                              fontSize: "10px"

                            }}
                          >
                            {category.name}
                          </div>
                        ))}</td>
                        <td className="py-2  border" style={{ width: "200px", maxWidth: "220px", overflowX: "auto", ...customScrollbarStyles }}>
                          {item.tags.map((tags, index) => (
                            <div
                              key={tags.name} // Using a unique identifier if available
                              className="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full dark:text-gray-400 gap-x-2 dark:bg-gray-800"
                              style={{
                                margin: '5px',
                                fontSize: "10px"
                              }}
                            >
                              #{tags}
                            </div>
                          ))}
                        </td>
                        <td className="py-2 border" style={{ width: "100px", maxWidth: "100px", overflowX: "auto", ...customScrollbarStyles }}>{item.meeting.map((meeting, index) => (
                          <div
                            key={meeting.name} // Using a unique identifier if available
                            class="inline px-3 py-1 text-sm font-normal rounded-lg  text-emerald-500 gap-x-2"
                            style={{
                              backgroundColor: meeting.color,
                              margin: '5px',
                              fontSize: "10px",
                              color: meeting.color2

                            }}
                          >
                            {meeting.name}
                          </div>
                        ))}</td>




                      </tr>

                    </React.Fragment>
                  ))}
              </tbody>
              <tbody>
                <tr className="cursor-pointer hover:bg-gray-100">

                  <td className="p-2 border">
                    <div className="flex justify-end text-xs" >
                      10 count
                    </div>
                  </td>

                  <td className="p-2 border">
                    <div className="flex justify-end text-xs" >
                      <i class="bi bi-plus"></i> Add Calculation
                    </div>
                  </td>
                  <td className="p-1 border">
                    <div className="flex justify-end text-xs" >
                      <i class="bi bi-plus"></i> Add Calculation
                    </div>
                  </td>
                  <td className="p-2 border">
                    <div className="flex justify-end text-xs" >
                      <i class="bi bi-plus"></i> Add Calculation
                    </div>
                  </td>
                  <td className="p-2 border">
                    <div className="flex justify-end text-xs" >
                      <i class="bi bi-plus"></i> Add Calculation
                    </div>
                  </td>
                  <td className="p-2 border">
                    <div className="flex justify-end text-xs" >
                    </div>
                  </td>
                  <td className="p-2 border">
                    <div className="flex justify-end text-xs" >
                    </div>
                  </td>



                </tr>
              </tbody>
            </table>
          </div>
        </div>


        <div className="footer flex items-center justify-center" style={{ marginTop: "150px" }}>
          <div className="border shadow-sm flex items-center gap-1 p-2 rounded-lg">
            <div
              className="p-1 rounded-lg flex items-center gap-2"
              style={{ border: "2px solid #eeeff1", fontSize: "10px" }}
            >
              <i class="bi bi-3-square-fill"></i>
              Selected
            </div>
            <div
              className=" p-1 rounded-lg flex items-center gap-2"
              style={{ border: "2px solid #eeeff1", fontSize: "10px" }}
            >
              <i class="bi bi-archive"></i>
              Archive
            </div>

            <div
              className=" p-1 rounded-lg flex items-center gap-2"
              style={{ border: "2px solid #eeeff1", fontSize: "10px", color: "red" }}
            >
              <i class="bi bi-trash"></i>
              Delete
            </div>
            <div
              className=" p-1 rounded-lg flex items-center gap-2"
              style={{ border: "2px solid #eeeff1", fontSize: "10px" }}
            >
              More
              <i class="bi bi-caret-down-fill" style={{ color: "#75777c" }}></i>
            </div>
            <div>
              <i class="bi bi-x-lg"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
