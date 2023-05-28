import { ICirlceCommon } from '@components/Shared/Common';
import ContactForm from '@components/Contact/ContactForm';
import { IContact } from '@components/Icons';
import { Layout } from '@components/Shared';

const ContactPage = () => (
  <section className="bg-white lg:py-32 py-14 lg:px-0 px-4">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
        {/* Content Left */}
        <div>
          <h4 className="text-blue-1 text-3xl">Information About us</h4>
          <div className="text-sub-title font-lato-light leading-7 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis
            aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor
            lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
          </div>
          <div className="mt-8"></div>
          <ICirlceCommon
            className="mr-2"
            sizeH="h-circle-sm"
            sizeW="min-w-circle-sm"
            bgColor="bg-[#05E6B7]"
          />
          <ICirlceCommon
            className="mr-2"
            sizeH="h-circle-sm"
            sizeW="min-w-circle-sm"
            bgColor="bg-[#00009D]"
          />
          <ICirlceCommon
            className="mr-2"
            sizeH="h-circle-sm"
            sizeW="min-w-circle-sm"
            bgColor="bg-[#F701A8]"
          />
        </div>
        {/* Content Right */}
        <div>
          <div className="text-blue-1 tex-2xl">
            <h4 className="text-blue-1 text-3xl lg:mt-0 mt-4">Contact Way</h4>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
              <div className="flex items-center lg:mb-8 mb-3">
                <ICirlceCommon className="mr-4" bgColor="bg-[#00009D]" />
                <div>
                  <p className="text-sub-title font-lato-light">Tel: 877-67-88-99</p>
                  <p className="text-sub-title font-lato-light">E-Mail: shop@store.com</p>
                </div>
              </div>
              <div className="flex items-center lg:mb-8 mb-3">
                <ICirlceCommon className="mr-4" bgColor="bg-[#FB2E86]" />
                <div>
                  <p className="text-sub-title font-lato-light">Support Forum</p>
                  <p className="text-sub-title font-lato-light">For over 24hr</p>
                </div>
              </div>
              <div className="flex items-center lg:mb-8 mb-3">
                <ICirlceCommon className="mr-4" bgColor="bg-[#FFB265]" />
                <div>
                  <p className="text-sub-title font-lato-light">
                    20 Margaret st, London Great britain, 3NM98-LK
                  </p>
                </div>
              </div>
              <div className="flex items-center lg:mb-8 mb-3">
                <ICirlceCommon className="mr-4" bgColor="bg-[#1BE982]" />
                <div>
                  <p className="text-sub-title font-lato-light">
                    Free standard shipping on all orders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative lg:mt-48 mt-20 grid lg:grid-cols-2 grid-cols-1 gap-4">
        <ContactForm />
        <div className="lg:relative absolute lg:-z-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <IContact />
        </div>
      </div>
    </div>
  </section>
);

export default ContactPage.layout = Layout;
