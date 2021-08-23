import "./Profile.css";

const Profile = () => {
    return (
        <div className="profile-sidebar">
            <div className="card">
                <div className="card-body no-padding">
                    <div className="row">
                        <div className="profile-userpic">
                            <img
                                src="https://radixtouch.com/templates/admin/smart/source/assets/img/dp.jpg"
                                className="img-responsive"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="profile-usertitle">
                        <div className="profile-usertitle-name">
                            Kiran Patel
                        </div>
                        <div className="profile-usertitle-job">Professor</div>
                    </div>
                    <ul className="list-group list-group-unbordered">
                        <li className="list-group-item">
                            <b>Followers</b> <a className="pull-right">1,200</a>
                        </li>
                        <li className="list-group-item">
                            <b>Following</b> <a className="pull-right">750</a>
                        </li>
                        <li className="list-group-item">
                            <b>Friends</b> <a className="pull-right">11,172</a>
                        </li>
                    </ul>
                    <div className="profile-userbuttons">
                        <button type="button" className="btn btn-circle">
                            EDIT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
