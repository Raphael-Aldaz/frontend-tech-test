/* eslint-disable no-console */

import { useQuery } from 'react-query';
import Cms from 'src/services/Cms';

import Footer from './Footer';
import FullPageLoader from '../FullPageLoader';
import Header from './Header';
import Slider from './Slider';

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  /*************** **********
   * Function find
   * *******************/
  function findSlider(array: any[]): any {
    const result = array.find(
      (type: { _kenticoItemType: string }) => type._kenticoItemType === 'section_static_slider',
    );
    return result;
  }
  /*************** **********
   * Menu Items data
   * *******************/
  const menuItemsKey = ['menuItems'];
  const { data: menuItems, isLoading } = useQuery(menuItemsKey, () => Cms.getConfig(), {
    refetchOnWindowFocus: false,
  });
  const menuItem = menuItems || [];
  /*************** **********
   * Slider item data
   * *******************/
  const sliderItemKey = ['sliderItem'];
  const { data: sliderItems, isLoading: slider_loading } = useQuery(
    sliderItemKey,
    () => Cms.getPageContent('home'),
    { refetchOnWindowFocus: false },
  );
  const sliderItem = sliderItems || [];
  const sliderItemArray = sliderItem.components || [];
  const sliderData = findSlider(sliderItemArray);
  if (isLoading) {
    return <FullPageLoader />;
  }
  return (
    <>
      <div className="flex min-h-screen w-full flex-col gap-10 overflow-hidden bg-red-800 relative ">
        <Header header={menuItem.header} />
        <main
          /* className={clsx('mx-auto flex w-full flex-grow flex-col content-spacer overflow-hidden')} */
          className="w-screen h-screen bg-white"
        >
          {/* <Slider data={sliderData} /> */}
          <Slider data={sliderData} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
