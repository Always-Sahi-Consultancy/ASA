import './EditProfile.css';

const EditProfile = ()=>{
    return(
        <div className='profile-container'>
            <div className='profile__heading'>Edit Profile</div>
            <div className='profile__subsection'>
                <div className='profile__section'>
                    <lable className="profile__name">First Name</lable>
                    <input className='profile__input' type="text" placeholder="Akhil"></input>
                </div>
                <div className='profile__section'>
                    <lable className="profile__name">Last Name</lable>
                    <input className='profile__input' type="text" placeholder="Nair"></input>
                </div>
                <div className='profile__row'>
                    <div className='profile__icon'>A</div>
                    <div className='profile__add'>
                        <div className='profile__addImg'>Add/Change Image:</div>
                        <div className='profile__inputImg'>
                            <input type="text" placeholder="No file selected" className='profile__inputI'></input>
                            <button className='profile__button'>Upload image</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default EditProfile;