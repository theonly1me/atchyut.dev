const Reviews = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-lg py-3 md:text-justify leading-8 text-neutral-700 max-w-4xl self-start font-semibold">
        Here&apos;s what my ADPList mentees have to say about me:
      </p>
      <div className="h-[560px] shadow-[0px_4px_19px_rgba(142,151,158,0.15)] rounded-[16px] overflow-hidden w-full max-w-2xl items-center">
        <iframe
          src="https://adplist.org/widgets/reviews?src=atchyut-preetham-pulavarthi"
          title="All Reviews"
          width="100%"
          height="100%"
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default Reviews;
