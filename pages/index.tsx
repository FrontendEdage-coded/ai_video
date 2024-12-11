import { type ReactElement } from 'react';
import { useTranslation } from 'next-i18next';
import type { NextPageWithLayout } from 'types';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


import env from '@/lib/env';
import azeeem from '../public/azeeem.jpg'
import hasnain from '../public/hasnain.jpg'
import hassan from '../public/hassan.jpg'
import jenny from '../public/jenny.jpg'
import Image from 'next/image';
import FrontLayout from '@/components/layouts/FrontLayout';
import Link from 'next/link';
import ContactForm from '@/components/Forms/ContactForm';


const Home: NextPageWithLayout = () => {
  const { t } = useTranslation('common');



  return (


    <FrontLayout>
      <main>
        <div className="relative">

          <div className="mt-20 md:mt-0">
            <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
              <div className=" lg:px-8  sm-padding-top">
                <div className="flex gap-2 justify-around small-display">
                  <div className="small-center">
                    <h1 className="font-fancy text-4xl font-bold leading-snug tracking-tight text-neutral-800 md:text-7xl lg:leading-none sm-font-size">
                      {t('convert-your')} <br /> <span className="ml-2 text-violet-600 lg:ml-0">{t('long-videos')}</span> {t('into')} <br />
                      <span className="ml-2 text-violet-600 lg:ml-0">{t('engaging-shorts')}</span>
                    </h1>
                    <h2 className="mx-auto mt-4 font-sans text-lg font-semibold text-neutral-500 sm:text-2xl sm:leading-normal lg:mt-6">
                      {t('create-pro-edited')} <span className="block">{t('everything-you-need')}</span>
                    </h2>
                  </div>
                  <div className="sm-video-width flex">
                    <div className="aspect-video video-sm-width overflow-hidden mt-1 rounded bg-neutral-100" style={{ width: '100%' }}>
                      <video
                        src={`/api/loadVideoPublic/${'landing_page/yt_caption.mp4'}`}
                        autoPlay
                        muted
                        loop
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-12 flex flex-col items-center gap-2">
                  <Link href="/auth/join" className="group flex relative rounded-full bg-violet-600 py-3.5 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700">
                    <span className="ml-4">{t('get-started')}</span>
                    <span className="ml-2 mr-4 inline-block -translate-y-px rounded-full bg-violet-800 px-3 py-1 text-xs font-medium leading-tight text-white transition-transform group-hover:scale-105">
                      {t('2-videos-free')}
                    </span>
                  </Link>
                  <p className="text-xs text-neutral-400">{t('no-credit-card-required')}</p>
                </div>
                <div className="mb-14 mt-20 flex items-center justify-center">
                  <div className="isolate mt-14 items-center space-y-2 md:flex md:-space-x-2 md:space-y-0">
                    <Image className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white delay-1000 hover:scale-[1200%]" src={azeeem} alt="" />
                    <Image className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white" src={hasnain} alt="" />
                    <Image className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white" src={hassan} alt="" />
                    <Image className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white" src={jenny} alt="" />
                    <div className="text-sm text-neutral-500 md:pl-6">{t('creators-have-repurposed')}</div>
                  </div>
                </div>
                <div className="relative w-11/12 m-auto py-10">
                  <div className="relative z-10 mx-auto">
                    <div className="col-span-2 rounded-lg shadow-lg border-2 border-emerald-500 bg-gradient-to-tr from-emerald-500 via-emerald-600 to-green-600 p-1">
                      <div className="relative h-full text-center overflow-hidden rounded-br-xl rounded-tl-xl bg-white px-6 py-6">
                        <h3 className="bg-gradient-to-tr from-neutral-900 via-neutral-800 to-neutral-600 bg-clip-text text-2xl font-bold text-transparent">
                          {t('viral-clips')}
                        </h3>
                        <p className="mt-2 text-base leading-relaxed text-neutral-700">
                          {t('perfect-to-share')}
                        </p>
                        <div className="relative mt-6 h-72">
                          <div className="absolute flex w-[200%] gap-x-6 animate-slide">
                            <div className="aspect-video rounded-lg shadow-md overflow-hidden">
                              <video
                                className="h-72 w-full object-cover"
                                src={`/api/loadVideoPublic/${'landing_page/yt_caption.mp4'}`}
                                autoPlay
                                muted
                                loop
                              />
                            </div>
                            <div className="aspect-[9/16] rounded-lg shadow-md overflow-hidden">
                              <video
                                className="h-72 w-full object-cover"
                                src={`/api/loadVideoPublic/${'landing_page/tiktok_caption.mp4'}`}
                                autoPlay
                                muted
                                loop
                              />
                            </div>
                            <div className="aspect-video rounded-lg shadow-md overflow-hidden">
                              <video
                                className="h-72 w-full object-cover"
                                src={`/api/loadVideoPublic/${'landing_page/yt1_caption.mp4'}`}
                                autoPlay
                                muted
                                loop
                              />
                            </div>
                            <div className="aspect-[9/16] rounded-lg shadow-md overflow-hidden">
                              <video
                                className="h-72 w-full object-cover"
                                src={`/api/loadVideoPublic/${'landing_page/tiktok1_caption.mp4'}`}
                                autoPlay
                                muted
                                loop
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="py-16 bg-gray-50">
              <div className="container mx-auto px-6 lg:px-8">
                <h2 className="text-center text-2xl font-bold text-gray-800 mb-12">
                  {t('some-awesome-marketing-teams')}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
                  <Image
                    className="object-contain h-16"
                    src="https://zetasoft.org/wp-content/uploads/2022/12/cropped-cropped-zetasoftLogo-removebg-preview.png"
                    alt="Zetasoft"
                    width="258"
                    height="88"
                  />
                  <Image
                    className="object-contain h-12"
                    src="https://s2smark.com/assets/img/logo/s2s-logo-1.png"
                    alt="S2SMark"
                    width="158"
                    height="48"
                  />
                  <Image
                    className="object-contain h-12"
                    src="https://codvets.com/wp-content/uploads/2021/04/Asset-1-1.png"
                    alt="Codvets"
                    width="158"
                    height="48"
                  />
                  <Image
                    className="object-contain h-12"
                    src="https://assets-global.website-files.com/6626a8927cbc7682875d608c/662d4619c16c8483da10ab94_Group%2054.png"
                    alt="Statamic"
                    width="158"
                    height="48"
                  />
                  <Image
                    className="object-contain h-12"
                    src="https://oraseya.com/wp-content/uploads/2023/11/OraseyaLogo75pxForIcon.png"
                    alt="Oraseya"
                    width="158"
                    height="48"
                  />
                </div>
              </div>
            </div>

            <div className="relative mt-16 bg-gray-50 py-20 sm:py-24">
              <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center">
                  {/* Left Section */}
                  <div className="space-y-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                      {t('how-it-works')}
                    </h2>
                    <dl className="space-y-10 text-lg leading-8 text-gray-700">
                      {[
                        { number: 1, title: t('add-your-videos'), description: t('from-youtube-or-upload') },
                        { number: 2, title: t('ai-generates-content'), description: '' },
                        { number: 3, title: t('publish'), description: t('to-your-site-social-media') },
                      ].map((step, index) => (
                        <div key={index} className="relative flex items-start space-x-6">
                          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-violet-600 text-white text-2xl font-bold">
                            {step.number}
                          </div>
                          <div className="flex-1">
                            <dt className="text-2xl font-semibold text-gray-900">
                              {step.title}
                            </dt>
                            <dd className="mt-2 text-gray-600">
                              {step.description}
                            </dd>
                          </div>
                        </div>
                      ))}
                    </dl>
                  </div>

                  {/* Right Section */}
                  <div className="text-center lg:text-left">
                    <h2 className="text-5xl font-extrabold leading-snug text-transparent bg-gradient-to-br from-neutral-900 to-violet-700 bg-clip-text">
                      <span className="text-violet-600">{t('save-hours')}</span> {t('using-ai')}<br />
                      {t('take-long-form-videos')}<br />
                      {t('create-short-form-marketing')}
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="flex flex-col justify-center">
                  <h2 className="text-4xl font-extrabold text-transparent bg-gradient-to-br from-neutral-900 to-violet-700 bg-clip-text sm:text-5xl lg:text-6xl">
                    {t('make-entire-team-happy')}
                  </h2>
                  <p className="mt-6 text-lg text-neutral-700 sm:text-xl">
                    <strong className="font-semibold">{t('making-video-first-step')}</strong> {t('let-video-tap')}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-56 bg-white py-16">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                  <div className="mx-auto flex max-w-xs flex-col gap-y-6">
                    <dt className="text-lg font-semibold leading-7 text-neutral-600">{t('just-like-you')}</dt>
                    <dd className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                      {t('10460-creators')}
                    </dd>
                  </div>
                  <div className="mx-auto flex max-w-xs flex-col gap-y-6">
                    <dt className="text-lg font-semibold leading-7 text-neutral-600">{t('processed-and-analyzed')}</dt>
                    <dd className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                      {t('15875-videos')}
                    </dd>
                  </div>
                  <div className="mx-auto flex max-w-xs flex-col gap-y-6">
                    <dt className="text-lg font-semibold leading-7 text-neutral-600">{t('short-videos')}</dt>
                    <dd className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                      {t('238125-generated')}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <section className="w-full max-w-7xl px-6 py-16 mx-auto">
              <div id="features" className="flex flex-col items-center gap-16">
                <h2 className="text-center text-5xl font-extrabold text-violet-700 tracking-tight">
                  {t('everything-you-need-to-create')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-4">
                  {[
                    {
                      icon: "text-purple-400/60",
                      title: t('accurate-subtitles'),
                      description: t('ai-generated-editable-transcription')
                    },
                    {
                      icon: "text-green-400/60",
                      title: t('auto-framing'),
                      description: t('editor-ai-automatically-frame-faces')
                    },
                    {
                      icon: "text-yellow-400/60",
                      title: t('auto-emojis'),
                      description: t('ai-suggested-emojis')
                    },
                    {
                      icon: "text-blue-400/60",
                      title: t('secure-cloud-storage'),
                      description: t('your-data-safely-stored')
                    }
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center gap-6 rounded-lg shadow-lg p-8 bg-white transform transition hover:scale-105"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className={`w-16 ${feature.icon}`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25"
                        />
                      </svg>
                      <div className="text-center">
                        <p className="text-xl font-semibold text-gray-800">
                          {feature.title}
                        </p>
                        <p className="text-sm text-gray-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>


            {/* contact form  */}
            <ContactForm />


          </div>

        </div>
      </main>
    </FrontLayout>


  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  // Redirect to login page if landing page is disabled
  if (env.hideLandingPage) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: true,
      },
    };
  }

  const { locale } = context;

  return {
    props: {
      ...(locale ? await serverSideTranslations(locale, ['common']) : {}),
    },
  };
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Home;
