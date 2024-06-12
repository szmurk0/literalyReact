import { useState } from 'react';
import './App.css';

function App() {
  // Ustawianie stanów do przechowywania wartości wejściowej i wyniku
  const [wartoscWejsciowa, ustawWartoscWejsciowa] = useState('');
  const [wynik, ustawWynik] = useState('');

  // Funkcja konwertująca numerał rzymski na liczbę arabską
  function rzymskieNaArabskie(rzymski) {
    const mapaNumeralRzymskie = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
    
    let suma = 0;
    let poprzedniaWartosc = 0;
    
    // Iteracja przez numerał rzymski od końca do początku
    for (let i = rzymski.length - 1; i >= 0; i--) {
      const aktualnaWartosc = mapaNumeralRzymskie[rzymski[i].toUpperCase()];
      
      // Jeśli aktualna wartość jest mniejsza niż poprzednia, odejmujemy ją od sumy
      if (aktualnaWartosc < poprzedniaWartosc) {
        suma -= aktualnaWartosc;
      } else {
        // W przeciwnym razie dodajemy ją do sumy
        suma += aktualnaWartosc;
      }
      
      poprzedniaWartosc = aktualnaWartosc;
    }
    
    return suma;
  }

  // Funkcja konwertująca liczbę arabską na numerał rzymski
  function arabskieNaRzymskie(arabski) {
    const mapaNumeralRzymskie = [
      ['M', 1000],
      ['CM', 900],
      ['D', 500],
      ['CD', 400],
      ['C', 100],
      ['XC', 90],
      ['L', 50],
      ['XL', 40],
      ['X', 10],
      ['IX', 9],
      ['V', 5],
      ['IV', 4],
      ['I', 1]
    ];
    
    let wynik = '';
    // Iteracja przez mapę numerałów rzymskich i budowanie wyniku
    for (const [rzymski, wartosc] of mapaNumeralRzymskie) {
      while (arabski >= wartosc) {
        wynik += rzymski;
        arabski -= wartosc;
      }
    }
    return wynik;
  }

  // Funkcja obsługująca konwersję
  function Konwertuj() {
    if (/^\d+$/.test(wartoscWejsciowa)) { // Ten śmieszny ciąg znaków "/^\d+$/" dla wyjaśnienia to mini walidacja, czy dane wprowadzone to tylko liczby
      // .test z nazwy służy do testowania, czy jakiś ciąg pasuje do wzorca w tym przypadku wzorcem jest "/^\d+$/". .test zwraca wartość true/false
      // Jeśli wartość wejściowa jest liczbą arabską, konwertuj na rzymską
      const skonwertowanaWartosc = arabskieNaRzymskie(parseInt(wartoscWejsciowa, 10));
      ustawWynik(skonwertowanaWartosc);
    } else {
      // W przeciwnym razie konwertuj numerał rzymski na arabską
      const skonwertowanaWartosc = rzymskieNaArabskie(wartoscWejsciowa);
      ustawWynik(skonwertowanaWartosc);
    }
  }

  return (
    <div className="container">
      <h1>
        Witam w konwerterze numerałów!
      </h1>

      <p>Podaj numerał rzymski lub liczbę arabską: </p>
      <input 
        type="text" 
        id="numeral" 
        value={wartoscWejsciowa} 
        onChange={(e) => ustawWartoscWejsciowa(e.target.value)} 
      />
      
      <input 
        type="submit" 
        value="Konwertuj" 
        onClick={Konwertuj} 
      />

      <p id="wynik">{wynik}</p>
    </div>
  );
}

export default App;
