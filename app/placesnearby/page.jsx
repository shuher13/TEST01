export default function Placesnearby() {
  return (
    <main className="relative mt-24">
      <section className="relative overflow-hidden"> 
        <div className="container m-auto p-20 flex flex-col gap-8"><h4 className="font-bold text-5xl text-center">Места рядом</h4></div>
        <div><iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A410c890ebd13b891f26b2e96cbe3ab3fd51a757499b9471dcb1c17f65f803add&amp;source=constructor"
          width="100%"
          height="450"
          frameborder="0"
        ></iframe></div>
      </section>
    </main>
  );
}
