import NavigationHeader from "../comps/NavigationHeader";
import MenuBar from "../comps/MenuBar";





function Policies() {
  return (
    <main className="main">
    <div className="content">
    <div className="headerSetting"><NavigationHeader text="Setting"/></div>
    <div className="title">
     <div className="titleImg"></div>
       <h2>Policies</h2></div>
<p>This policy has been established to ensure consistency of all 
    external advertisement of university positions. External advertisements 
    are supplemental to internal postings and recruitment/hiring policy requirements. 
    Recruitment resources such as businesses, organizations, professional associations, 
    alumni groups, listservs and trade journals can be utilized by departments 
    to aid in the search process. S/C/Ds needing assistance in identifying other 
    potential recruitment 
    resources may contact Human Resources Client Services.</p>


<MenuBar/>
   </div>

  </main>

  );
}

export default Policies;