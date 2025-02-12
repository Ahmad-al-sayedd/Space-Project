import { useParams } from "react-router-dom";

const SingleLaunch = ({ launches }) => {
  const { launch } = useParams();

  // Find the correct launch by flight_number
  const result = launches.find((item) => item.flight_number === Number(launch));

  if (!result) {
    return <p style={{ color: "white", textAlign: "center" }}>Launch not found</p>;
  }

  return (
    <div className="single-launch-container">
      <h1>{result.mission_name}</h1>

      {/* Mission Patch */}
      <img src={result.links.mission_patch} alt={result.mission_name} className="mission-patch" />

      {/* Mission Details */}
      <p><strong>Details:</strong> {result.details || "No details available"}</p>
      <p><strong>Launch Date:</strong> {new Date(result.launch_date_utc).toLocaleDateString()}</p>
      <p><strong>Launch Success:</strong> {result.launch_success ? "✅ Success" : "❌ Failed"}</p>

      {/* If launch failed, show reason */}
      {!result.launch_success && (
        <p><strong>Failure Reason:</strong> {result.launch_failure_details?.reason}</p>
      )}

      {/* Launch Site */}
      <p><strong>Launch Site:</strong> {result.launch_site.site_name_long}</p>

      {/* Rocket Details */}
      <h2>Rocket Information</h2>
      <p><strong>Rocket Name:</strong> {result.rocket.rocket_name}</p>
      <p><strong>Rocket Type:</strong> {result.rocket.rocket_type}</p>

      {/* Links Section */}
      <div className="launch-links">
        <h3>Useful Links</h3>
        <ul>
          {result.links.article_link && (
            <li><a href={result.links.article_link} target="_blank" rel="noopener noreferrer">Launch Article</a></li>
          )}
          {result.links.video_link && (
            <li><a href={result.links.video_link} target="_blank" rel="noopener noreferrer">Watch Launch Video</a></li>
          )}
          {result.links.wikipedia && (
            <li><a href={result.links.wikipedia} target="_blank" rel="noopener noreferrer">Wikipedia</a></li>
          )}
        </ul>
      </div>

      {/* Image Gallery */}
      {result.links.flickr_images.length > 0 && (
        <div className="image-gallery">
          <h3>Image Gallery</h3>
          {result.links.flickr_images.map((img, index) => (
            <img key={index} src={img} alt={`Launch Image ${index + 1}`} className="launch-image" />
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleLaunch;
