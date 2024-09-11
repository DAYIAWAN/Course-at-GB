import logo from "./logo.svg";
import "./App.scss";
import Message from "./components/Message";

const someTitle = "Custom title";
const someText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellendus explicabo autem sint fuga voluptatem laboriosam, consequatur adipisci recusandae ex nihil, blanditiis harum? Mollitia, aliquid libero alias reprehenderit molestiae magni ducimus et, est nesciunt aut cupiditate dolorum. Iste, consectetur voluptatibus amet autem odio vitae accusamus velit porro ipsum nemo laboriosam harum veniam, tenetur natus rerum quaerat doloremque soluta exercitationem minus suscipit! Velit a quas, assumenda eum voluptates quo. Officiis alias neque, et eaque accusantium ut possimus architecto distinctio aperiam doloribus placeat cumque sequi culpa illum voluptatibus odit harum impedit sint sunt? Accusantium blanditiis sequi minima illum voluptatibus tempore aliquam, quasi eius. Dolore fugiat id voluptatum, ad blanditiis similique quidem libero fuga nam quas nihil quaerat aspernatur ut, a quae omnis ipsam iure alias distinctio eius accusamus. Dolores facilis rem nulla, maiores dicta perspiciatis asperiores quis possimus quam est nisi eligendi dolorum ipsum ullam porro veniam qui nostrum cumque sunt!";

function App() {
  return <Message title={someTitle} text={someText} />;
}

export default App;
