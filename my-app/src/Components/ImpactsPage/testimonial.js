function Testimonial() {
  return (
    <div className="col-md-6 col-lg-4 item">
      <div className="box">
        <p className="description">
          “You know how they say it takes a village to raise a baby? Well, one
          good doula is equal to that whole village!”
        </p>
      </div>
      <div className="author">
        <img
          className="rounded-circle"
          src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="
        />
        <h5 className="name">— Emily D.</h5>
        <p className="title">CEO of Company Inc.</p>
      </div>
    </div>
  );
}

export default Testimonial;