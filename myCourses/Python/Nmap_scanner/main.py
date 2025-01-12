import nmap

def scan_network(target, scan_type='-sS'):
    """
    Сканирование сети с использованием Nmap.

    :param target: Цель сканирования (IP-адрес или диапазон).
    :param scan_type: Тип сканирования (по умолчанию -sS).
    :return: Результаты сканирования.
    """
    nm = nmap.PortScanner()

    try:
        print(f"Сканирование {target} с параметрами {scan_type}...")
        nm.scan(target, arguments=scan_type)

        for host in nm.all_hosts():
            print(f"\nХост: {host} ({nm[host].hostname()})")
            print(f"Состояние: {nm[host].state()}")

            for proto in nm[host].all_protocols():
                print(f"\nПротокол: {proto}")
                ports = nm[host][proto].keys()
                for port in sorted(ports):
                    state = nm[host][proto][port]['state']
                    print(f"Порт: {port}\tСостояние: {state}")

    except Exception as e:
        print(f"Ошибка сканирования: {e}")

if __name__ == "__main__":
    # Введите IP-адрес или диапазон адресов
    target_ip = input("Введите IP-адрес или диапазон для сканирования: ").strip()
    # Опционально: укажите параметры сканирования
    scan_args = input("Введите параметры сканирования (по умолчанию -sS): ").strip() or "-sS"

    scan_network(target_ip, scan_args)
