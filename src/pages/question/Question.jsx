import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderQuestion from "./SliderQuestion";

import "./question.css";

import { Navigation } from "swiper/modules";

const Question = () => {
  // const swiperRef = useRef(null);
  // const [buttonText, setButtonText] = useState("Далее");

  // const [activeSlide, setActiveSlide] = useState(0);
  // const [selectedOptions, setSelectedOptions] = useState([]);

  // const handleChangeButtonText = (slideIndex) => {
  //   if (slideIndex === 4) {
  //     setButtonText("Последний вопрос");
  //   } else if (slideIndex === 5) {
  //     setButtonText("Отправить заявку");
  //   } else {
  //     setButtonText("Далее");
  //   }
  // };

  // const goToNextQuestion = () => {
  //   if (swiperRef.current !== null) {
  //     swiperRef.current.swiper.slideNext();
  //     handleChangeButtonText(swiperRef.current.swiper.activeIndex);
  //   }
  // };

  // const goToPrevQuestion = () => {
  //   if (swiperRef.current !== null) {
  //     swiperRef.current.swiper.slidePrev();
  //     handleChangeButtonText(swiperRef.current.swiper.activeIndex);
  //   }
  // };



  const swiperRef = useRef(null);
  const [buttonText, setButtonText] = useState('Далее');
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnswered, setIsAnswered] = useState([]);

  const handleChangeButtonText = (slideIndex) => {
    if (slideIndex === 4) {
      setButtonText('Последний вопрос');
    } else if (slideIndex === 5) {
      setButtonText('Отправить заявку');
    } else {
      setButtonText('Далее');
    }
  };

  useEffect(() => {
    handleChangeButtonText(activeSlide);
  }, [activeSlide]);

  const handleOptionChange = (option) => {
    setIsAnswered(prevState => {
      const isSelected = prevState.includes(option);
      let updatedSelectedOptions;
  
      if (isSelected) {
        updatedSelectedOptions = prevState.filter(item => item !== option);
      } else {
        updatedSelectedOptions = [...prevState, option];
      }
  
      return updatedSelectedOptions;
    });
  };
  

  const goToNextQuestion = () => {
    if (swiperRef.current !== null) {
      const currentSlideIndex = swiperRef.current.swiper.activeIndex;
  
     
      const isAnsweredOnCurrentSlide = isAnswered[currentSlideIndex];
  
      if (isAnsweredOnCurrentSlide && isAnsweredOnCurrentSlide.length > 0) {
        swiperRef.current.swiper.slideNext();
        setActiveSlide(currentSlideIndex + 1);
      } else {
        alert("Пожалуйста, выберите хотя бы один вариант ответа.");
      }
    }
  };

  const goToPrevQuestion = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.swiper.slidePrev();
      setActiveSlide(activeSlide - 1);
    }
  };


  return (
    <div>
      <div className="question-container">
        <div className="question-head">
          <div className="question-logo">
            <img src="./img/icons/question-logo.png" alt="logo" />
          </div>
          <div className="question-title">
            <h4>
              5 ответов от Вас <br />
              <span className="background-gradient">
                и сразу решение от НАС
              </span>{" "}
            </h4>
          </div>
        </div>

        <Swiper navigation={true} modules={[Navigation]} ref={swiperRef} onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}>
          <SwiperSlide>
            <SliderQuestion
              id="01"
              question="Где основная проблема?"
              options={[
                "Управленческая часть (должностные инструкции, мотивация, штатное расписание, кадры, планирование, аналитика, финансы и т.п.)",
                "Производственная часть (техника, станки, оборудование, инженерия, качество, цех, проектирование и т.п.)",
                "Коммерческая часть (продажи, реализации, маркетинг, встречи, презентации, реклама и т.п.)",
              ]}
              selectedOptions={isAnswered}
              handleOptionChange={handleOptionChange}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderQuestion
              id="02"
              question="Нужен ли выезд к вам на предприятие ?"
              options={["Обязательно", "Видеосвязи будет достаточно"]}
              selectedOptions={isAnswered}
              handleOptionChange={handleOptionChange}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderQuestion
              id="03"
              question="Нужна ли полная конфиденциальность или можно использовать Ваш пример  в наших рекламных целях?"
              options={[
                "Полная конфиденциальность со штрафами за разглашение",
                "Можно показать людям мой пример",
              ]}
              selectedOptions={isAnswered}
              handleOptionChange={handleOptionChange}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderQuestion
              id="04"
              question="Какой показатель для вас более важен? "
              options={[
                "Увеличение прибыли",
                "Увеличение оборота",
                "Увеличение эффективности (время)",
              ]}
              selectedOptions={isAnswered}
              handleOptionChange={handleOptionChange}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderQuestion
              id="05"
              question="Какой вариант оплаты за нашу работу Вы рассматриваете?"
              options={[
                "100% предоплата с гарантией возврата",
                "100% предоплата без гарантии и т.п.",
                "30 - 30 - 40% поэтапная оплата за результат ",
              ]}
              selectedOptions={isAnswered.selectedOptions}
              handleOptionChange={handleOptionChange}
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="question-item-title">
              <h4 style={{ color: "rgba(197, 197, 197, 1)" }}>
                Введите имя и номер телефона
                <br />
                чтобы мы могли направить Вам предварительные варианты
              </h4>
            </div>
            <div className="question-inputs">
              <input type="text" placeholder="Ваше имя" />
              <input type="tel" placeholder="Номер телефона" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="question-buttons">
          <button onClick={goToPrevQuestion}>
            {" "}
            <img src="./img/icons/arrow-r-button.png" alt="" />
            Назад
          </button>
          <button
            onClick={goToNextQuestion}
            className="next-btn"
            style={{ color: "#000" }}
          >
            {buttonText} <img src="./img/icons/arrow-l-button.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
