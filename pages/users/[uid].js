const getUsersProfiel = (props) => {
  return <h1>This is the user id: {props.username}</h1>;
};

export default getUsersProfiel;

export const getServerSideProps = async (ctx) => {
  const { params } = ctx;

  const userId = params.uid;

  return {
    props: {
      username: "userid-" + userId,
    },
  };
};
