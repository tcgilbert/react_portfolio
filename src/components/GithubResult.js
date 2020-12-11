function GithubResult(props) {
  console.log(props.userInfo.name);
  return (
    <div>
      <h5>Name: {props.userInfo.name}</h5>
      <h5>Bio: {props.userInfo.bio}</h5>
    </div>
  );
}

export default GithubResult;

