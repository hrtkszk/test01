#!/usr/local/bin/python3.7
# coding:utf-8
# MySQLdbのインポート
import MySQLdb
import sys
import datetime

# データベースへの接続とカーソルの生成
connection = MySQLdb.connect(
    host='mysql202.phy.lolipop.lan',
    user='LAA1405090',
    passwd='1234abcd',
    db='LAA1405090-test')

# cursor = connection.cursor(MySQLdb.cursors.DictCursor)
cursor = connection.cursor()




cursor.execute(f"SELECT * FROM test WHERE id='{sys.argv[1]}'")

num_fields = len(cursor.description)
field_names = [i[0] for i in cursor.description]
print(field_names)

for row in cursor:
    i = 0
    row1 = list()
    for item in row:
        if str(type(item)) == "<class 'datetime.datetime'>":
             row1.append(str(item.strftime("%Y/%m/%d %H:%M:%S")))
        else:
             row1.append(item)
        #row1.append(item)
        i = i + 1
    print (row1)

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
