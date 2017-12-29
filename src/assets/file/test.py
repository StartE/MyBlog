import threading
from concurrent import futures
import time
import csv
try:
    from functools import namedtuple
except ImportError:
    from collections import namedtuple


import requests


header = ["aid", "view", "danmaku", "reply", "favorite", "coin", "share"]

def save():
    """ 将数据保存至本地
    """
    with open("C:/Users/xxx/Documents/Python/result.csv", "w+", encoding="utf-8") as f:
        f_csv = csv.writer(f)
        f_csv.writerow(header)
        f_csv.writerows(result)

if __name__ == "__main__":
    urls = ["http://api.bilibili.com/archive_stat/stat?aid={}".format(i)
            for i in range(10000)]
    with futures.ThreadPoolExecutor(32) as executor:
        executor.map(run, urls)
    save()