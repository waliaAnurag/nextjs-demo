import '../../../styles/rootLayoutStyles.css';
import MainHeader from './components/main-header/main-header';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};
//we dont have head tag here because all the content being set into head is being given into metaData which will apply these meta data to all the page being covered by this rootLayout

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <MainHeader />
        {children}
      </body>
    </html>
  );
}
