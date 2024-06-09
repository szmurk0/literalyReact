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

