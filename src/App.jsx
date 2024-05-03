import React from "react";
import Card from "./Components/Card/Card";

const App = () => {
  const data = [
    {
      title: "FREE",
      price: "0",
      user: "Single User",
      isUser: true,
      storage: "50GB Storage",
      isStorage: true,
      public: "Unilimited Public Project",
      isPublic: true,
      community: "Community Access",
      isCommunity: true,
      private: "Unlimited Private Project",
      isPrivate: false,
      supportive: "Dedicated Phone Support",
      isSupportive: false,
      free: "Free Subdomain",
      isFree: false,
      status: "Monthly status Reports",
      isStatus: false,
    },
    {
      title: "PLUS",
      price: "9",
      user: "5 Users",
      isUser: true,
      storage: "50GB Storage",
      isStorage: true,
      public: "Unilimited Public Project",
      isPublic: true,
      community: "Community Access",
      isCommunity: true,
      private: "Unlimited Private Project",
      isPrivate: true,
      supportive: "Dedicated Phone Support",
      isSupportive: true,
      free: "Free Subdomain",
      isFree: true,
      status: "Monthly status Reports",
      isStatus: false,
    },
    {
      title: "PRO",
      price: "49",
      user: "Unlimited Users",
      isUser: true,
      storage: "50GB Storage",
      isPublic: true,
      isStorage: true,
      public: "Unilimited Public Project",
      isPublic: true,
      community: "Community Access",
      isCommunity: true,
      private: "Unlimited Private Project",
      isPrivate: true,
      supportive: "Dedicated Phone Support",
      isSupportive: true,
      free: "Free Subdomain",
      isFree: true,
      status: "Monthly status Reports",
      isStatus: true,
    },
  ];
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {data.map((element, index) => {
              return <Card data={element} key={index} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
