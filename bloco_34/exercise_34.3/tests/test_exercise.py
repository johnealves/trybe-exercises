import pytest
from exercise import listNumbers


def test_list_with_number_30():
    response = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz', 'Fizz', 22, 23, 'Fizz', 'Buzz', 26, 'Fizz', 28, 29, 'FizzBuzz']
    assert listNumbers(30) == response


def test_list_with_number_1():
    assert listNumbers(1) == [1]


def test_list_with_number_0():
    assert listNumbers(0) == []


def test_list_with_string():
    with pytest.raises(TypeError, match="'str' object cannot be interpreted as an integer"):
        listNumbers("15")
