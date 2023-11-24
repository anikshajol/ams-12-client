import useAuth from "../../../Hook/useAuth";

const Home = () => {
  const { name } = useAuth();
  console.log(name);
  return (
    <div>
      <h2>This is home without login {name} </h2>
    </div>
  );
};

export default Home;
