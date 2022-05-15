function ProfileCard(props) {
  return (
    <div className="card-body user-profile-card mb-3">
      <img
        src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="
        className="user-profile-image rounded-circle"
        alt=""
      />
      <h4 className="text-center h6 mt-2">Filler Name</h4>
      <p className="text-center small">UI/UX Designer</p>
      <button className="btn btn-theme btn-sm">Message</button>
    </div>
  );
}

export default ProfileCard;