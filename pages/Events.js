import MenuBar from "../comps/MenuBar";
import PlusButton from "../comps/PlusButton";
import SettingsIcon from "../comps/SettingsIcon";
import Searchbar from "../comps/Searchbar";
import NavigationHeader from "../comps/NavigationHeader";
import ImageCardWithBadge from "../comps/ImageCardWithBadge";





function YourFriends() {
  return (
    <main className="main">
      <div className="content">

        <div className= "topmenu">
        <NavigationHeader text="My Events"> </NavigationHeader>
        <SettingsIcon> </SettingsIcon>
        </div>

        <div className="searchbarbox">
        <Searchbar></Searchbar>
        </div>

        <div className="ImageBadgeList">
            <ImageCardWithBadge ></ImageCardWithBadge>
            <ImageCardWithBadge></ImageCardWithBadge>
        </div>

        <div className="positionplusbutton"> 
        <PlusButton></PlusButton>
        </div>

      </div>
      <MenuBar></MenuBar>
    </main>
  );
}

export default YourFriends;