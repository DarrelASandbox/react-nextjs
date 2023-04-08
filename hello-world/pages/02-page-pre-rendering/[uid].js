const UserIDPage = (props) => {
  return <h1>{props.id}</h1>;
};

export default UserIDPage;

export const getServerSideProps = async (context) => {
  const { params, req, res } = context;
  const userId = params.uid;
  return { props: { id: 'userid-' + userId } };
};
