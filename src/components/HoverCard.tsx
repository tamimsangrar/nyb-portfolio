import React from 'react';

const Card = ({ title, items }) => {
  return (
    <div className="card">
      <div className="slide slide1">
        <div className="content">
          <div className="icon">
            <h2 className="text-white text-xl font-bold">{title}</h2>
          </div>
        </div>
      </div>
      <div className="slide slide2">
        <div className="content">
          <ul className="list-style">
            {items.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const HoverCards = () => {
  const cardsData = [
    {
      title: "Design Challenges",
      items: [
        "Interface complexity",
        "User feedback integration",
        "Design system scaling",
        "Accessibility compliance"
      ]
    },
    {
      title: "Content Issues",
      items: [
        "Time constraints in creation",
        "Consistency across projects",
        "Creative blocks and flow",
        "Version management"
      ]
    },
    {
      title: "Technical Hurdles",
      items: [
        "Integration complexity",
        "Performance optimization",
        "Cross-platform support",
        "Update management"
      ]
    }
  ];

  return (
    <div className="container">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} items={card.items} />
      ))}

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          width: 100%;
        }
        
        .card .icon {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgb(23, 23, 23);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
        }
        
        .card .slide {
          width: 280px;
          height: 200px;
          transition: 0.5s;
        }
        
        .card .slide.slide1 {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
          transition: .7s;
          transform: translateY(100px);
        }
        
        .card:hover .slide.slide1 {
          transform: translateY(0px);
        }
        
        .card .slide.slide2 {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          box-sizing: border-box;
          transition: .8s;
          transform: translateY(-100px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          background: white;
          border-radius: 0.5rem;
        }
        
        .card:hover .slide.slide2 {
          transform: translateY(0);
        }
        
        .card .slide.slide2::after {
          content: "";
          position: absolute;
          width: 30px;
          height: 4px;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          background: rgb(23, 23, 23);
        }

        .list-style {
          list-style: none;
          padding: 0;
          margin: 0;
          color: #414141;
        }

        .list-style li {
          margin-bottom: 8px;
          text-align: left;
          font-size: 14px;
          padding-left: 8px;
        }

        .list-style li:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 940px) {
          .container {
            gap: 1rem;
          }
          
          .card .slide {
            width: 260px;
            height: 180px;
          }
        }

        @media (max-width: 640px) {
          .card .slide {
            width: 280px;
            height: 180px;
          }
          
          .list-style li {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
};

export default HoverCards;