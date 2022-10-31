import React from 'react'
const TabOpt = ({ activeTab, setActiveTab }) => {
  const tabs =
    [
      {
        _id: 1,
        Tab_name: "Delivery",
        Active_img: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
        Inactive_img: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
        BackDrop: "FCEEC0",
      },

      {
        _id: 2,
        Tab_name: "Dining",
        Active_img: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
        Inactive_img: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
        BackDrop: "FCEEC0",
      },
      {
        _id: 3,
        Tab_name: "NightOut",
        Active_img: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
        Inactive_img: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
        BackDrop: "FCEEC0",
      }
    ]
  return (
    
      <div className="max-width center">
        {tabs.map((tab) => {
          return (
            <div key={tab._id} onClick={() => setActiveTab(tab.Tab_name)} className={`tab-item center ${activeTab === tab.Tab_name && "active-tab"}`} >
              <div className="center">
                <img className=''style={{height:"60px", width:"60px",marginRight:"15px", cursor:"pointer"}} alt={tab.Tab_name} src={activeTab === tab.Tab_name ? tab.Active_img : tab.Inactive_img} />
              </div>
              <div className="center fw-bolder" style={{marginRight:"15px", cursor:"pointer"}}>{tab.Tab_name}</div>
            </div>
          )
        }

        )}

      </div>
    
  )
}

export default TabOpt