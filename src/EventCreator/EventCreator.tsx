import React, { useState } from 'react';
import './eventcreator.styles.scss';
import { eventStructure, languageOption } from './config';

const payload: eventStructure = {
  eventName: '',
  title: {
    en: '',
    es: '',
    ca: '',
    pt: '',
  },
  subtitle: {
    en: '',
    es: '',
    ca: '',
    pt: '',
  },
  description: {
    en: '',
    es: '',
    ca: '',
    pt: '',
  },
  capacity: 0,
};

export const EventCreator: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState('EN');
  const [eventName, setEventName] = useState('');
  const [capacity, setCapacity] = useState('');
  const [, displayUserInput] = useState('');

  const languageOptions: languageOption[] = ['EN', 'ES', 'CA', 'PT'];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    payload.capacity = parseInt(capacity);
    if (isNaN(payload.capacity)) payload.capacity = 0;
    payload.eventName = eventName;
    console.log(payload);
  };

  const setEventInfoInLangs = (e: any, payload: any) => {
    if (selectedLang === 'EN') Object.assign(payload, { en: e.target.value });
    if (selectedLang === 'ES') Object.assign(payload, { es: e.target.value });
    if (selectedLang === 'CA') Object.assign(payload, { ca: e.target.value });
    if (selectedLang === 'PT') Object.assign(payload, { pt: e.target.value });
  };

  const handleInput = (e: any, payload: any) => {
    displayUserInput(e.target.value);
    setEventInfoInLangs(e, payload);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    setSelectedLang(e.target.outerText);
  };

  const getTitleInMatchedLang = () => {
    if (selectedLang === 'EN') return payload.title.en;
    if (selectedLang === 'ES') return payload.title.es;
    if (selectedLang === 'CA') return payload.title.ca;
    if (selectedLang === 'PT') return payload.title.pt;
  };

  const getSubtitleInMatchedLang = () => {
    if (selectedLang === 'EN') return payload.subtitle.en;
    if (selectedLang === 'ES') return payload.subtitle.es;
    if (selectedLang === 'CA') return payload.subtitle.ca;
    if (selectedLang === 'PT') return payload.subtitle.pt;
  };

  const getDescriptionInMatchedLang = () => {
    if (selectedLang === 'EN') return payload.description.en;
    if (selectedLang === 'ES') return payload.description.es;
    if (selectedLang === 'CA') return payload.description.ca;
    if (selectedLang === 'PT') return payload.description.pt;
  };

  return (
    <main className="form-container">
      <form onSubmit={handleSubmit}>
        <section className="event-name__container event-name">
          <label className="event-label">Event name</label>
          <input
            type="text"
            className="event-input"
            id="eventName"
            onChange={(e) => setEventName(e.target.value)}
          />
        </section>

        <section>
          <div className="event__lang-tabs-container">
            {languageOptions.map((lang: string) => {
              return (
                <button
                  onClick={handleClick}
                  className={`event__lang-tab ${
                    selectedLang === lang ? 'event__lang-tab-current-lang' : ''
                  }`}
                  key={lang}
                >
                  <p className="event__lang-text">{lang}</p>
                </button>
              );
            })}
          </div>
        </section>

        <section className="event__data-container">
          <div className="event-title">
            <label className="event-label">Title</label>
            <input
              type="text"
              className="event-input"
              value={getTitleInMatchedLang()}
              onChange={(e) => handleInput(e, payload.title)}
            ></input>
          </div>

          <div className="event-subtitle">
            <label className="event-label">Subtitle</label>
            <input
              type="text"
              className="event-input"
              value={getSubtitleInMatchedLang()}
              onChange={(e) => handleInput(e, payload.subtitle)}
            ></input>
          </div>

          <div className="event-description">
            <label className="event-label">Description</label>
            <textarea
              className="event-textarea"
              value={getDescriptionInMatchedLang()}
              onChange={(e: any) => handleInput(e, payload.description)}
            ></textarea>
          </div>
        </section>

        <section className="event-name__container event-capacity">
          <label className="event-label">Capacity</label>
          <input
            type="number"
            className="event-input"
            id="capacity"
            onChange={(e: any) => setCapacity(e.target.value)}
          />
        </section>

        <section className="event__submit-container">
          <button type="submit" className="event__submit">
            Create
          </button>
        </section>
      </form>
    </main>
  );
};
