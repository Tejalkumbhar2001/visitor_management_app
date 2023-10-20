import frappe

def get_context(context):
	def before_save():
		frappe.throw("hi")
