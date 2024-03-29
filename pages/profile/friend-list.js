import MenuBar from "../../comps/MenuBar";
import PlusButton from "../../comps/PlusButton";
import SettingsIcon from "../../comps/SettingsIcon";
import Searchbar from "../../comps/Searchbar";
import NavigationHeader from "../../comps/NavigationHeader";
import FriendList from "../../comps/FriendList";

function YourFriends() {
  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="My Friends" link="/profile"> </NavigationHeader>
          <SettingsIcon> </SettingsIcon>
        </nav>
        <div className="searchbarbox">
          <Searchbar></Searchbar>
        </div>
        <div className="friendslistbox">
          <FriendList
            name="WorstCook4Life"
            profile="url('/img/general/profilephoto1.png')"
            status="#48E574"
            message="I cant cook guys, but I'm here to try"
          ></FriendList>
          <FriendList
            name="BestCookever1!"
            profile="url('/img/general/profilephoto2.png')"
            status="#48E574"
            message="Watch my recipes and eat my food because its delish"
          ></FriendList>
          <FriendList
            name="NeverOnline1234"
            profile="url('/img/general/profilephoto3.png')"
            message="Here but not really"
          ></FriendList>
        </div>

        <div className="plusButton">
          <PlusButton />
        </div>
      </div>
      <MenuBar></MenuBar>
    </main>
  );
}

export default YourFriends;
