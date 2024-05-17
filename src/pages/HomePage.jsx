import welcomeImage from '../images/telephone-svgrepo-com.svg'; 


const HomePage = () => (
    <div>
      <h1>Welcome to the Phonebook App</h1>
      <img src={welcomeImage} alt="Welcome" style={{ width: '300px', height: 'auto' }} />
      <p>This app allows you to manage your contacts efficiently.</p>
    </div>
  );
  
  export default HomePage;