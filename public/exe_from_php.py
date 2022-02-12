#!/usr/local/bin/python3.7
# coding:utf-8
# MySQLdbのインポート
import MySQLdb
import sys

# データベースへの接続とカーソルの生成
connection = MySQLdb.connect(
    host='mysql201.phy.lolipop.lan',
    user='LAA1395778',
    passwd='test01test01',
    db='LAA1395778-test01')
cursor = connection.cursor()

cursor.execute(f"SELECT * FROM test WHERE id={sys.argv[0]}")

for row in cursor:
  print (row)

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
