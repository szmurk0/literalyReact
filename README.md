# Konwerter Numeralów w React 
## Opis projektu
Ten projekt jest prostym konwerterem, który pozwala użytkownikowi przekształcić liczby arabskie na numerały rzymskie i vice versa. Aplikacja jest zbudowana w React i używa stanu komponentów do przechowywania wartości wejściowej i wyniku konwersji.

## Funkcjonalność
Aplikacja składa się z następujących funkcji:

## App
Główna funkcja komponentu aplikacji.

## Stany:

wartoscWejsciowa: przechowuje wartość wpisaną przez użytkownika (numerał rzymski lub liczba arabska).
wynik: przechowuje wynik konwersji.

## Funkcje:

### rzymskieNaArabskie(rzymski):

Konwertuje numerał rzymski na liczbę arabską.
Parametry:
rzymski: String reprezentujący numerał rzymski.
Zwraca: Liczbę arabską odpowiadającą podanemu numerałowi rzymskiemu.

### arabskieNaRzymskie(arabski):

Konwertuje liczbę arabską na numerał rzymski.
Parametry:
arabski: Liczba arabska do konwersji.
Zwraca: String reprezentujący numerał rzymski odpowiadający podanej liczbie arabskiej.

### Konwertuj():

Obsługuje proces konwersji na podstawie wartości wejściowej użytkownika.
Sprawdza, czy wartość wejściowa jest liczbą arabską, czy numerałem rzymskim, i wywołuje odpowiednią funkcję konwersji.
Aktualizuje stan wynik z odpowiednią wartością.

## Elementy JSX:

<div className="container">: Kontener dla całej aplikacji.
<h1>: Nagłówek aplikacji.
<p>: Tekst instrukcji dla użytkownika.
<input type="text" id="numeral" value={wartoscWejsciowa} onChange={(e) => ustawWartoscWejsciowa(e.target.value)} />: Pole wejściowe do wpisania numerału rzymskiego lub liczby arabskiej przez użytkownika.
<input type="submit" value="Konwertuj" onClick={Konwertuj} />: Przycisk do wywołania konwersji.
<p id="wynik">{wynik}</p>: Element do wyświetlenia wyniku konwersji.

