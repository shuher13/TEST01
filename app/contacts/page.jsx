export default function Contacts() {
  return (
    <main className="relative mt-40">
      <section className="relative overflow-hidden">
        <div className="container m-auto flex flex-col tablet:flex-row gap-20 py-20 justify-between">
          <iframe className="w-full tablet:w-auto"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab0e25b1532dfa1dce83d76a65135ff0e4280c56550ff5cd4c1ea710370021e30&amp;source=constructor"
            width="562"
            height="446"
            frameBorder="0"
          ></iframe>
          <div className="flex flex-wrap justify-center gap-10 items-center">
            <div className="flex flex-col gap-4 w-[90%] tablet:w-[45%]">
              <h4 className="w-full text-center text-2xl font-bold">
                Контакты
              </h4>
              <ol className="flex justify-center gap-6 text-center">
                <li>
                  +7 (912) 819-11-90 <br /> Сергей
                </li>
                <li>
                  +7 (978) 164-85-74 <br /> Ирина
                </li>
              </ol>
            </div>
            <div className="flex flex-col gap-4 w-[90%] tablet:w-[45%]">
              <h4 className="text-center text-2xl font-bold">Адрес</h4>
              <ol className="flex gap-6 text-center">
                <li>Республика Крым, Черноморский район, село Новосельское, Восточная улица, 93</li>
              </ol>
            </div>
            <div className="flex flex-col items-center gap-4 w-[90%]">
              <h4 className="text-2xl font-bold">Время Заезда-Выезда</h4>
              <ol className="flex flex-col gap-1">
                <li>Будни: 00:00-00:00</li>
                <li>Выходные: 00:00-00:00</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
