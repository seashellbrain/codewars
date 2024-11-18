def order_weight(string):
    def weight_key(number):
        return (sum(int(digit) for digit in number), number)
    
    return ' '.join(sorted(string.split(), key=weight_key))