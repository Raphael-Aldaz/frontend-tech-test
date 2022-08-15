/* eslint-disable no-console */

import { useQuery } from 'react-query';
import Cms from 'src/services/Cms';

import FullPageLoader from '../FullPageLoader';
import Carousel from './Carousel';
import Footer from './Footer';
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
  function findCaroussel(array: any[]): any {
    const result = array.find(
      (type: { _kenticoItemType: string }) => type._kenticoItemType === 'section_static_carousel',
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
  const slidersItemKey = ['slidersItem'];
  const { data: slidersItems, isLoading: sliderLoading } = useQuery(
    slidersItemKey,
    () => Cms.getPageContent('home'),
    {
      refetchOnWindowFocus: false,
    },
  );
  const slidersItem = slidersItems || [];
  const sliderItemArray = slidersItem.components || [];
  const sliderData = findSlider(sliderItemArray);
  const carouselData = findCaroussel(sliderItemArray);

  if (isLoading || sliderLoading) {
    return <FullPageLoader />;
  }
  return (
    <>
      <div className="flex min-h-screen w-full flex-col gap-10 overflow-hidden  relative ">
        <Header header={menuItem.header} />
        <main /* className={clsx('mx-auto flex w-full flex-grow flex-col content-spacer overflow-hidden')} */
        >
          <Slider data={sliderData} />
          <Carousel data={carouselData} />
        </main>
        <Footer footerData={menuItem.footer} />
      </div>
    </>
  );
}

export default Layout;
