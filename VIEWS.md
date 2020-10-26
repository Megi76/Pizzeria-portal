# Dashboard

    `/`
        - statystyki dzisiejszych zamówień (zdalne, lokalne)
        - lista rezerwacji, eventow zaplanowanych na dzisiaj

# Logowanie

    `/login`
        - pola na login i hasło
        - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

    `/tables`
    wybór daty i godziny
    tabela z listą rezerwacji oraz wdarzeń
        -każda kolumna = 1 stolik
        -każduy wiersz = 30 minut
        -ma przypominać widok tygodnia w kalendarzu google, gdzie w kolumnach zamiast dni są rózne stoliki
        -po kliiknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółu
        
    `/tables/booking/:id`

        -zawiera informacje dotyczące rezerwacji
        -umożliwia edycję i zapisanie zmian

    `/tables/booking/new`
        -analogicznie do powyżej, bez początkowych informacji

    `/tables/events/:id`
        -analogicznie do powyżej, dla eventów

    `/tables/events/new`
        -analogicznie do powyżej, dla eventow, bez początkowych informacji


# Widok kelnera

    `/waiter`
    - w wierszach stoliki
    - w kolumnach różne rodzaje info:
      - status
      - czas od ostatniej aktywności
    - w ostatniej kolumnie dostępne akcje dla danego stolika
`/waiter/order/new`
    - numer stolika (edytowalny)
    - menu produktów dostępnych w restauracji
    - opcje wybranego produktu
    - zamównienie (zamównione produkty z opcjami i ceną)
    - kwotę zamówienia
`/waiter/order/:id`
    - jak powyżej

# Widok kuchni

    `/kitchen`
    - wyświetlać listę zamówień w kolejności złożenia
    - lista musi zawierać
        - nr stolika (lub zamówienia zdalnego)
        - pełne info dotyczące zamównionych dań
    - na liście musi być możliwość oznaczenia zamównienia jako zrealizowane