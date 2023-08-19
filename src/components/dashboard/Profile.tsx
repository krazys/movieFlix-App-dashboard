import "../../../styles/dashboard/Profile.scss";

const ProfilePage = () => {
  return (
    <div className="profileContainer">
      <div className="profileHeadSection">
        <h3>Your Profile</h3>
        <p>You can update your profile here.</p>
      </div>
      <div className="profileContent">
        <div className="basicInfoSection">
          <div className="leftSection"></div>
          <div className="rightSection">
            <div className="topName">
              <h2>
                <span>Name : </span>
                {}
              </h2>
              <p>
                <span>Email : </span>
                {}
              </p>
            </div>
            <div className="bottomDetails">
              <p>
                <span>Location : </span>
                {}
              </p>
              <p>
                <span>Location : </span>
                {}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
